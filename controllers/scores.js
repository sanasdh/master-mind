var Score = require('../models/score');

module.exports = {
  create,
  highScores
};

async function create(req, res) {
  console.log("create");
  console.log(req.user)

  try {
    await Score.create(req.body);
    // Use the highScores action to return the list
    highScores(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function highScores(req, res) {
  console.log("highscore");
  console.log(req.user)
  const scores = await Score.find({})
    .sort({ numGuesses: 1, seconds: 1 })
    // Default to a limit of 20 high scores
    // if not specified in a query string
    .limit(req.query.limit || 20);
  res.json(scores);
}




