declare var require: any;
const package2 = require('../../package.json');
export const environment = {
  production: true,
  hmr: false,
  version: package2.version,
  api: 'https://esam.io'
};
