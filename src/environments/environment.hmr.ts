const { version } = require('../../package.json');
export const environment = {
  production: false,
  hmr: true,
  version,
  api: 'http://localhost:1337'
};
