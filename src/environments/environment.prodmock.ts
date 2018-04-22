declare var require: any;
const package2 = require('../../package.json');
export const environment = {
  production: false,
  hmr: false,
  version: package2.version,
  api: ''
};
