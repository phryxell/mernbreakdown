const router = require('express').Router();
let Breakdown = require('../models/breakdown.model');

router.route('/').get((req, res) => {
  Breakdown.find({})
    .then(breakdowns => res.json(breakdowns))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const breakdowntime = Number(req.body.breakdowntime);
  const youtubeurl = req.body.youtubeurl;
  const date = Date.parse(req.body.date);

  const newBreakdown = new Breakdown({
    username,
    description,
    breakdowntime,
    youtubeurl,
    date,
  });

  newBreakdown.save()
  .then(() => res.json('Breakdown added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Breakdown.findById(req.params.id)
    .then(breakdown => res.json(breakdown))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Breakdown.findByIdAndDelete(req.params.id)
    .then(() => res.json('Breakdown deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Breakdown.findById(req.params.id)
    .then(breakdown => {
        breakdown.username = req.body.username;
        breakdown.description = req.body.description;
        breakdown.breakdowntime = Number(req.body.breakdowntime);
        breakdown.youtubeurl = req.body.youtubeurl;
        breakdown.date = Date.parse(req.body.date);

        breakdown.save()
        .then(() => res.json('Breakdown updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;