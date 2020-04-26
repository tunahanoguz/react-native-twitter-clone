module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
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
    },
  },
};
