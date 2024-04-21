const { Article } = require('../../../models');

/**
 * Get a list of articles
 * @returns {Promise}
 */
async function getArticles() {
  return Article.find({});
}

/**
 * Get article detail
 * @param {string} user_id - User ID
 * @returns {Promise}
 */
async function getArticle(user_id) {
  return User.findById(user_id);
}

/**
 * Create new article
 * @param {string} title - Title
 * @param {string} content - Content
 * @param {Date} date_created - Date Created
 * @param {string} user_id - User ID
 * @returns {Promise}
 */
async function createArticle(title, content, date_created) {
  return Article.create({
    title,
    content,
    date_created,
  });
}

/**
 * Update existing article
 * @param {string} user_id - User ID
 * @param {string} title - Title
 * @param {string} content - Content
 * @returns {Promise}
 */
async function updateArticle(user_id, title, content) {
  return Article.updateOne(
    {
      _id: user_id,
    },
    {
      $set: {
        title,
        content,
      },
    }
  );
}

/**
 * Delete an article
 * @param {string} user_id - User ID
 * @returns {Promise}
 */
async function deleteArticle(user_id) {
  return Article.deleteOne({ _id: user_id });
}

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
