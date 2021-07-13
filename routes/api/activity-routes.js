const express = require("express");
const router = express.Router();
const { Activity, Question } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      include: [Question],
    });
    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;