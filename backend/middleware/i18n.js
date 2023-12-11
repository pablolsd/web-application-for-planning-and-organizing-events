const i18nMiddleware = (req, res, next) => {

  req.language = 'en';

  next();
};

module.exports = i18nMiddleware;
