const express = require("express");
const { Review } = require("../db");
const router = express.Router();

/**
 *shows the list of reviews
 * Link: http://localhost:3000/api/reviews
 */
router.get("/", async (req, res, next) => {
  const reviews = await Review.findAll();
  res.send(reviews);
});

module.exports = router;
