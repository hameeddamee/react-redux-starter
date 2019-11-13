import config from "../config";
import format from "date-fns/format";
import isDate from "date-fns/is_date";

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

// Formats supported are any ordering of M/MM, D/DD and YYYY with -, /, or . separators.
export const parseDate = dateString => {
  if (dateString.length === 0) {
    return "";
  }
  var dateFormat = config.global.dateFormat;

  var regex = /[^.\-/]+/g;
  var keys = dateFormat.match(regex);
  var parsed = dateString.match(regex);
  var dateObj = {};
  keys.forEach(function(key, index) {
    dateObj[key.charAt(0)] = parseInt(parsed[index], 10);
  });
  return new Date(dateObj["Y"], dateObj["M"] - 1, dateObj["D"]);
};

export const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

export const parseTime = timeArg => {
  if (!timeArg) return;
  if (isDate(timeArg)) return timeArg;

  var _timeArg$split = timeArg.split(" "),
    _timeArg$split2 = _slicedToArray(_timeArg$split, 2),
    time = _timeArg$split2[0],
    amPm = _timeArg$split2[1];

  var _time$split = time.split(":"),
    _time$split2 = _slicedToArray(_time$split, 2),
    hours = _time$split2[0],
    minutes = _time$split2[1];

  if (amPm && amPm.toLowerCase() === "pm") {
    hours = +hours + 12;
  }

  return new Date(0, 0, 0, +hours, +minutes);
};

export const formatDate = (date, customFormat) => {
  return format(date, customFormat || config.global.dateFormat);
};

export const formatTime = time => {
  return format(time, config.global.timeFormat);
};

export const formatDateTime = dateTime => {
  return format(dateTime, config.global.dateTimeFormat);
};

export const createInputDateMask = () => {
  // Divide dateFormat to groups like [D/,M/,YYYY]
  var formatMask = "",
    inputMask = "";
  var separator = config.global.dateFormat.match(/(\W)/g)[0];
  var reg = new RegExp(
    "([A-Za-z]+" + separator + ")([A-Za-z]+" + separator + ")([A-Za-z]+)"
  );
  var regArray = config.global.dateFormat.match(reg);
  var maxGroupsSize = 3;

  for (var i = 1; i <= maxGroupsSize; i++) {
    if (regArray[i].length === 2 && regArray[i].match("" + separator)) {
      // Check option like M/ and replace with MM/
      formatMask += regArray[i].slice(0, -1) + regArray[i];
    } else if (regArray[i].length === 1) {
      formatMask += regArray[i].repeat(2);
    } else {
      formatMask += regArray[i];
    }
  }

  // Replace all symbols to 9
  inputMask = formatMask.replace(/[A-Za-z]/g, "9");
  return { inputMask: inputMask, formatMask: formatMask };
};
