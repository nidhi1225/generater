const asyncHanlder = require('express-async-handler');

const getStory = asyncHanlder(async (req, res) => {
  
    res.status(200).json({message: 'Get story title'})
  })
  
  const setStory= (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Please add text field');
    }
    res.status(200).json({message: 'Your story'})
  }

  const updateStory = (req, res) => {
    res.status(200).json({message: `Update story ${req.params.id}`})
  }
  
  const deleteStory = (req, res) => {
    res.status(200).json({message: `Delete story ${req.params.id}`})
  }
  
  module.exports = {
    getStory,
    setStory,
    updateStory,
    deleteStory
  }