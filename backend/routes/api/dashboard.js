const express = require("express");
const { ensureAuth } = require("../../middleware/auth");
const router = express.Router();
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

router.get("/", ensureAuth, (req, res) => {
  try {
    let stats = [];
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 4,
        min: 3,
      },
      wordsPerSentence: {
        max: 3,
        min: 2,
      },
    });

    for (let i = 0; i <= 4; i++) {
      const stat = {
        id: i,
        message: lorem.generateSentences(5),
      };

      console.log(stat);
      stats.push(stat);
    }

    console.log(stats);

    res.send(stats);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
