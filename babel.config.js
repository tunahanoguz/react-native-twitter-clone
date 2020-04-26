module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          // actions: './src/actions',
          // api: './src/api',
          // assets: './src/assets',
          // reducers: './src/reducers',
          // sagas: './src/sagas',
          // translations: './src/translations',
          components: './src/components',
          screens: './src/screens',
          theme: './src/theme.js',
          // validations: './src/validations',
          // _sizes: './src/_sizes',
          // _globalStyles: './src/_globalStyles',
          // _environment: './src/_environment',
        },
      },
    ],
  ],
};
