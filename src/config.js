const packageJson = require('../package.json');

module.exports = {
  title: packageJson.name,
  version: packageJson.version,
  settings: {
    locale: 'en',
    header: {
      backgroundBar: '#3F51B5',
      color: '#fff',
      statusBarColor: '#303f9f',
      statusBarStyle: 'light-content',
    },
  },
};
