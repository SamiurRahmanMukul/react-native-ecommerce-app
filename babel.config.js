module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@common': './src/common',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@layouts': './src/layouts',
          '@components': './src/components',
          '@store': './src/store',
          '@src/types': './src/types',
          '@utils': './src/utils',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
  ],
};
