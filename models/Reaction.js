const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const options = {year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric',hour12:'true'}

//schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Schema.Types.ObjectId(),
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength:280,
      },

    username: 
      {
        type: String,
        required: true,
      },
    

      createdAt: {
        type: Date,
        default: Date.now,
        get:function(timestamp){
          return new Date(timestamp).toLocaleString('en-us',options);
        }
       
      },
  }
);


const Reaction = model('reaction', reactionSchema);


module.exports = Reaction;