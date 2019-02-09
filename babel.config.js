module.exports = function config(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-class-properties',
    ],
    sourceMaps: true,
  };
};
