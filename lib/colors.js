// Generated by CoffeeScript 2.0.2
var pad;

pad = require('./index');

module.exports = function(string, size, options = {}) {
  if (typeof options === 'string') {
    options = {
      char: options
    };
  }
  options.colors = true;
  return pad(string, size, options);
};
