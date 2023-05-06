const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');
const options = {year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric',hour12:'true'}

//schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength:1,
      maxlength:280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get:function(timestamp){
        return new Date(timestamp).toLocaleString('en-us',options);
      }
    },

    username: 
      {
        type: String,
        required: true,
      },
    

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//creates a virtual property 'reactionCount'
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;