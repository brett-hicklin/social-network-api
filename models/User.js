const { Schema, model } = require("mongoose");
const userSchema = require("./User");

//schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    },

    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//creates a virtual property 'friendCount'
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
