const router = require("express").Router();
const {
  getThoughts,
  createThoughts,
  getSingleThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThoughts);
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

module.exports = router;
