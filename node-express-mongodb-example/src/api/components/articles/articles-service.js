const articlesRepository = require('./articles-repository');

/**
 * Get list of users
 * @returns {Array}
 */
async function getArticles() {
  const articles = await articlesRepository.getArticles();

  const results = [];
  for (let i = 0; i < articles.length; i += 1) {
    const article = articles[i];
    results.push({
      user_id: article.user_id,
      title: article.title,
      content: article.content,
      date_created: article.date_created
    });
  }

  return results;
}

/**
 * Get user detail
 * @param {string} user_id - User ID
 * @returns {Object}
 */
async function getArticle(user_id) {
  const article = await articlesRepository.getArticle(user_id);

  // Article not found
  if (!article) {
    return null;
  }

  return {
    user_id: article.user_id,
    title: article.title,
    content: article.content,
    date_created: article.date_created
  };
}

/**
 * Create new article
 * @param {string} title - Title
 * @param {string} content - Content
 * @param {string} user_id - User ID
 * @param {string} date_created - Date Created
 * @returns {boolean}
 */
async function createArticle(title, content, user_id, date_created) {
  try {
    await articlesRepository.createArticle(title, content, user_id, date_created);
  } catch (err) {
    return null;
  }

  return true;
}

/**
 * Update existing user
 * @param {string} user_id - User ID
 * @param {string} title - Title
 * @param {string} content - Content
 * @param {Date} date_created - Date Created
 * @returns {boolean}
 */
async function updateArticle(user_id, title, content, date_created) {
  const article = await articlesRepository.getArticle(user_id);

  // Article not found
  if (!article) {
    return null;
  }

  try {
    await articlesRepository.updateArticle(user_id, title, content, date_created);
  } catch (err) {
    return null;
  }

  return true;
}

/**
 * Delete user
 * @param {string} user_id - User ID
 * @returns {boolean}
 */
async function deleteArticle(user_id) {
  const article = await articlesRepository.getArticle(user_id);

  // Article not found
  if (!article) {
    return null;
  }

  try {
    await articlesRepository.deleteArticle(user_id);
  } catch (err) {
    return null;
  }

  return true;
}

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
};
