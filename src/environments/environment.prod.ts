declare var require: any;
const { version } = require('../../package.json');
export const environment = {
  production: true,
  hmr: false,
  version,
  api: 'https://esam.io'
};
