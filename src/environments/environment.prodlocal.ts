declare var require: any;
const package2 = require('../../package.json');
export const environment = {
  production: true,
  version: package2.version,
  hmr: false,
  api: 'http://localhost:1337'
};
