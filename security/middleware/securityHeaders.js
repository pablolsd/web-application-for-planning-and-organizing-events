const helmet = require('helmet');

const setSecurityHeaders = (app) => {
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
};

module.exports = setSecurityHeaders;
