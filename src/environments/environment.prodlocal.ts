const { version } = require('../../package.json');
export const environment = {
  production: true,
  version,
  hmr: false,
  api: 'http://localhost:1337'
};
