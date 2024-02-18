const { Reaction, Thought } = require("../models");

module.exports = {
  // GET ALL REACTIONS
  async getReactions(req, res) {
    try {
      const reactions = await Reaction.find();
      res.json(reactions);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  },

  // GET SINGLE REACTION
  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({
        _id: req.params.reactionId,
      }).select("-__v");

      if (!reaction) {
        return res
          .status(404)
          .json({ message: "No reaction found with this id" });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // CREATE REACTIONS
  async createReactions(req, res) {
    try {
      const reaction = await Reaction.create(req.body);
      const thought = await Thought.findOneAndUpdate(
        { _id: req.body.thoughtId },
        { $addToSet: { reactions: reaction._id } },
        { new: true }
      );
      res.status(200).json(reaction);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndDelete({
        _id: req.params.reactionId,
      }).select('-__v');

      if (!reaction) {
        return res
          .status(404)
          .json({ message: "No reaction found with this ID" });
      }

      res.json({ message: "Reaction deleted successfully!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res
          .status(404)
          .json({ message: "No reaction found with this ID" });
      }

      res.json(reaction);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
