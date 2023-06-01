/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@/*': './src/*',
            '@assets/*': ['./assets/*'],
          },
        },
      ],
    ],
  };
};
