const { Schema, model } = require('mongoose')
const validator = require('validator')
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString('sp-MX'),
    },
    user: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reaction',
      }
    ],
  },
  {
    toJSON: {
      getters: true,
    }
  }
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought;