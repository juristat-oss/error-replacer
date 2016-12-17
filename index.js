const errorToJson = require('utils-error-to-json');

module.exports = function getErrorReplacer(basicsOnly = true) {
  return function errorJsonReplacer(key, value) {
    if (value instanceof Error) {
      const errorJson = errorToJson(value);

      if (basicsOnly) {
        return {
          type: errorJson.type,
          message: errorJson.message,
        };
      }

      return errorJson;
    }

    return value;
  };
};
