const helmet = require('helmet');

const setSecurityHeaders = (app) => {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", 'trusted-scripts.com'],
        },
      },
    })
  );
};

module.exports = setSecurityHeaders;
