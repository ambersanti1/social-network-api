const router = require("express").Router();
const {
  getReactions,
  createReactions,
  getSingleReaction,
  deleteReaction,
  updateReaction,
} = require("../../controllers/reactionController");

router.route("/").get(getReactions).post(createReactions);
router
  .route("/:reactionId")
  .get(getSingleReaction)
  .delete(deleteReaction)
  .put(updateReaction);

module.exports = router;
