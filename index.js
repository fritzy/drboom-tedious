'use strict';

const Boom = require('boom');
const tediousError = require('tedious/lib/errors');

module.exports = (options) => {

  return {

    detect: (value) => {
      return (value instanceof tediousError.ConnectionError || value instanceof tediousError.ConnectionError);
    },

    handle: (value) => {
      if (value instanceof tediousError.RequestError) {
        console.error(value.toString());
        return Boom.badImplementation("Database query error");
      } else if (value instanceof tediousError.ConnectionError) {
        return Boom.badGateway("Database connection error");
      }
    }

  };
};
