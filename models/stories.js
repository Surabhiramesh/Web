var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var storySchema = new Schema({
  farmer : {
    type : Schema.Types.ObjectId,
    ref : "farmers",
    required : true
  },
  time : {
    type : String,
  },
  deviceDetails : {
    type : Schema.Types.ObjectId,
    ref : "devices"
  },
  rawImage : {
    originalName : String,
    alias : String
  },
  scribbleImage :{
    originalName : String,
    alias : String
  },
  layerPrakshep : {
    satBalls  : String,
    grid : [{
      type : String
    }],
    tags : String,
  },
  likes : {
    type : Schema.Types.ObjectId,
    ref: "likes"
  },
  comments : {
    type : Schema.Types.ObjectId,
    ref : "comments"
  },
  caption : {
    type : String
  },
  _isStory : {
    type : Boolean,
    default : false
  },
  location : {
    village :  String,
    taluka : String
  }
});
module.exports = mongoose.model('stories',storySchema);