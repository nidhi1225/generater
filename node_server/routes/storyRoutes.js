const express = require('express');
const router = express.Router();
const {getStory, setStory, updateStory, deleteStory} = require('../controllers/storyController')
// const { Configuration , OpenAIApi } = require('openai');
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey : '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'
});

router.get('/', async (req, res) => {
    const title = req.query.title;
    console.log(title);
    const createStory = async() => {
        const prompt = `A story about ${title} in 2000 words`
        const response = await openai.completions.create({
            model : "text-davinci-003",
            // model: 'gpt-3.5-turbo-instruct',
            prompt : prompt,
            max_tokens : 2048,
            temperature : 1
        })
        console.log(response)
        res.json(response);
    }
    createStory()
});

router.route('/').get(getStory).post(setStory)
router.route('/:id').put(updateStory).delete(deleteStory)

module.exports = router;