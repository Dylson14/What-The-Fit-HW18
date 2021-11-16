// Q for TA's: I'd like to quickly go over the role of the models
// folder in the MVC structure. i.e,what is the models folder
// responsible for.
// models: setting up data and organizinig how we want our data to look like
// view:  what we give to end-users (client)
// controllers: getting request and getting data from models


// Bringing in mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [
    {
      type: {
          type: String,
          trim: true,
      },
      name: {
          type: String,
          trim: true,
      },
      duration: {
          type: Number,
      },
      weight: {
          type: Number,
          default: 0
      },
      reps: {
          type: Number,
          default: 0
      },
      sets: {
          type: Number,
          default: 0
      },
      distance: {
          type: Number,
          default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
})

    const exercise = mongoose.model("exercise", exerciseSchema);

    module.exports = exercise; 