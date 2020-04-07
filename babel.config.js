module.exports = function babelconfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
