const router = require("express").Router();
const {
  getUsers,
  createUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUsers);
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser)
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend)

module.exports = router;
