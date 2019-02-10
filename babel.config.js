module.exports = function config(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-flow'],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
    ],
    sourceMaps: true,
  };
};
