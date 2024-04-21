const articlesService = require('./articles-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

/**
 * Handle get list of articles request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function getArticles(request, response, next) {
  try {
    const articles = await articlesService.getArticles();
    return response.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle get article detail request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function getArticle(request, response, next) {
  try {
    const article = await articlesService.getArticle(request.params.id);

    if (!article) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Unknown article');
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle create article request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function createArticle(request, response, next) {
  try {
    const title = request.body.title;
    const content = request.body.content;
    const date_created = request.body.date_created;
    const user_id = request.body.user_id;

    const success = await articlesService.createArticle(title, content, date_created, user_id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create article'
      );
    }

    return response.status(200).json({ title, content });
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle update article request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function updateArticle(request, response, next) {
  try {
    const user_id = request.params.user_id;
    const title = request.body.title;
    const content = request.body.content;

    const success = await articlesService.updateArticle(user_id, title, content);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update article'
      );
    }

    return response.status(200).json({ user_id });
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle delete article request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function deleteArticle(request, response, next) {
  try {
    const user_id = request.params.user_id;

    const success = await articlesService.deleteArticle(user_id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete article'
      );
    }

    return response.status(200).json({ user_id });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
