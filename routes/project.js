/**
 * NPM import
 */
const express = require('express');

/**
 * Local import
 */
// Checking authentication middleware
const isAuth = require('../middlewares/is-auth');
// Controllers
const projectController = require('../controllers/project');
// Utils
const projectValidation = require('../utils/validation/project-validation');

/**
 * Code
 */
const router = express.Router();

/**
 * Routes
 */
// POST /project/new-project
router.post(
  '/project/new-project',
  isAuth,
  projectValidation.postProject,
  projectController.postProject
);

// GET /user/projects
router.get('/user/projects', isAuth, projectController.getUserProjects);

// POST /project/new-dates
router.post('/project/new-dates', isAuth, projectController.postProjectDates);

// DELETE /project/delete-dates
router.delete(
  '/project/delete-dates',
  isAuth,
  projectController.deleteProjectDates
);

// PUT /project/vote-dates
router.put('/project/vote-dates', isAuth, projectController.voteProjectDates);

/**
 * Export
 */
module.exports = router;
