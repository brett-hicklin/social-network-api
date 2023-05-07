const { Schema, Types } = require("mongoose");
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: "true",
};

//schema to create User model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },

  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: function (timestamp) {
      return new Date(timestamp).toLocaleString("en-us", options);
    },
  },
});

module.exports = reactionSchema;
