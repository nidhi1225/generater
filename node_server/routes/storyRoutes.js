const express = require('express');
const router = express.Router();
const {getStory, setStory, updateStory, deleteStory} = require('../controllers/storyController')

router.route('/').get(getStory).post(setStory)
router.route('/:id').put(updateStory).delete(deleteStory)

module.exports = router;