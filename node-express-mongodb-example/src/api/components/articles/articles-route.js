const express = require('express');

const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const articlesControllers = require('./articles-controller');
const articlesValidator = require('./articles-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/articles', route);

 // Create article
 route.post(
    '/',
    authenticationMiddleware,
    celebrate(articlesValidator.createArticle),
    articlesControllers.createArticle
  );
    
  // Get list of articles
  route.get('/', authenticationMiddleware, articlesControllers.getArticles);

  // Get article detail
  route.get('/:id', authenticationMiddleware, articlesControllers.getArticle);

  // Update article
  route.put(
    '/:id',
    authenticationMiddleware,
    celebrate(articlesValidator.updateArticle),
    articlesControllers.updateArticle
  );

  // Delete article
  route.delete('/:id', authenticationMiddleware, articlesControllers.deleteArticle);
};
