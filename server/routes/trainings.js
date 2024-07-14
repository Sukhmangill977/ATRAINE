const router = require('express').Router();
let Training = require('../models/Training');

// Get all trainings
router.route('/').get((req, res) => {
  Training.find()
    .then(trainings => res.json(trainings))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add new training
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date.parse(req.body.date);

  const newTraining = new Training({
    title,
    description,
    duration,
    date,
  });

  newTraining.save()
    .then(() => res.json('Training added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
