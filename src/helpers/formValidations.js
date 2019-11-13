import { isValidNumber } from "libphonenumber-js/custom";
import metadata from "libphonenumber-js/metadata.min.json";
import { formatDate, formatTime } from "./dateHelper";

export const required = value => {
  return value ? undefined : "Required";
};

export const requiredNumeric = value => {
  return value !== undefined && value !== "" ? undefined : "Required";
};

export const matchingPassword = (value, allValues) => {
  return value !== allValues.password ? "Passwords do not match" : undefined;
};

export const email = value => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ? "Invalid email address"
    : undefined;
};

export const validateReceiverEmail = (value, userEmail) => {
  return value === userEmail
    ? "You can't use your own email as receiver address"
    : undefined;
};

export const alphanumeric = value => {
  return value && !/^[a-z0-9]*$/i.test(value)
    ? "Input should only contain alphanumeric characters"
    : undefined;
};

export const alphabetic = value => {
  return value && !/^[a-z]*$/i.test(value)
    ? "Input should only contain alphabetic characters"
    : undefined;
};
// context.t('Input should only contain alphabetic characters')

export const alphanumericspace = value => {
  return !/^[a-z\d\s]*$/i.test(value)
    ? "Input should only contain alphanumeric and space characters"
    : undefined;
};

export const numeric = value => {
  return value && !/^\d*$/i.test(value)
    ? "Input should only contain numeric characters"
    : undefined;
};

export const biggerThanValue = min => {
  return function(value) {
    return value !== undefined && value <= min
      ? "Must be bigger than " + min
      : undefined;
  };
};

export const biggerThanOrEqualToValue = min => {
  return function(value) {
    return value !== undefined && value !== "" && value < min
      ? "Must be bigger than or equal to " + min
      : undefined;
  };
};

export const lessThanValue = (max, value) => {
  return value && value > max ? "Must be less than " + max : undefined;
};

export const biggerThanZero = biggerThanValue(0);

export const biggerThanOrEqualToZero = biggerThanOrEqualToValue(0);

export const validatePassword = value => {
  return value && !/^(?=.{8,})(?=.*[A-Z])(?=.*[0-9]).*$/g.test(value)
    ? "Password must contain at least 8 characters, one number, and at least one capital letter"
    : undefined;
};

export const isDate = value => {
  let isInvalid =
    Object.prototype.toString.call(value) === "[object Date]"
      ? isNaN(value.getTime())
      : true;
  return value && isInvalid ? "Invalid date" : undefined;
};

export const maxLength = max => {
  return function(value) {
    return value && value.length > max
      ? "Must be " + max + " characters or less"
      : undefined;
  };
};

export const isValidPhone = value => {
  return isValidNumber(value, metadata)
    ? undefined
    : "Must be a valid phone number";
};

export const maxFileSize = (value, maxSize) => {
  return value && value.file && maxSize <= value.file.size / 1024 / 1024
    ? "File size must be under " + maxSize + "mb"
    : undefined;
};

export const maxDate = (value, _maxDate) => {
  return value && value > _maxDate
    ? "Date must be before " + formatDate(_maxDate)
    : undefined;
};

export const minDate = (value, _minDate) => {
  return value && value < _minDate
    ? "Date must be after " + formatDate(_minDate)
    : undefined;
};

export const minTime = (value, _minTime) => {
  if (!value) return;
  let time = getTimeObj(value);
  let min = getTimeObj(_minTime);

  return time.hours < min.hours ||
    (time.hours === min.hours && time.minutes < min.minutes)
    ? "Time must be after " + formatTime(_minTime)
    : undefined;
};

export const maxTime = (value, _maxTime) => {
  if (!value) return;
  let time = getTimeObj(value);
  let max = getTimeObj(_maxTime);

  return time.hours > max.hours ||
    (time.hours === max.hours && time.minutes > max.minutes)
    ? "Time must be before " + formatTime(_maxTime)
    : undefined;
};

export const getTimeObj = date => {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes()
  };
};
