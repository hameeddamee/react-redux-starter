export const formatErrorText = errorResponse => {
  let result = `${errorResponse.errorcode}: ${errorResponse.errormsg}`;

  if (errorResponse.detail) {
    result = `${result}: ${errorResponse.detail}`;
  }

  return result;
};

/**
 * The point of this function is to:
 *  1. Relate a generalized server errormsg to a specific form-field.
 *  2. Return formatted errormsg in a form that redux-form expects.
 *  3. Use `_error` for non-field-specific messages.
 *
 * @param {String} _error : This is the server response, `response.errormsg`.
 * @param {Object} formValues : Form values.
 */
export const preprocessErrorTextForReduxForm = (_error, formValues) => {
  return Object.keys(formValues).reduce(
    function(acc, key) {
      if (_error.toLowerCase().includes(key.toLowerCase())) {
        acc._error = "";
        acc[key] = _error;
      }
      return acc;
    },
    { _error: _error }
  );
};
