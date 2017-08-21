module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.woff2',
    'dist/**.woff',
    'dist/**.ttf',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*',
    'dist/assets/fonts/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};
