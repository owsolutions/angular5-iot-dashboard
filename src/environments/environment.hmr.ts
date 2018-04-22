declare var require: any;
const package2 = require('../../package.json');
export const environment = {
  production: false,
  hmr: true,
  version: package2.version,
  api: 'http://localhost:1337'
};
