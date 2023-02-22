const { override, useBabelRc } = require('customize-cra');
const path = require('path');
module.exports = override(useBabelRc());

module.exports = function override(config, env) {
  console.log('React app rewired works!');
  config.resolve.alias['~'] = path.resolve(__dirname, 'src');
  config.resolve.fallback = {
    fs: false,
  };
  return config;
};
