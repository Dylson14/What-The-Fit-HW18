// Q for TA's: I'd like to quickly go over the role of the models
// folder in the MVC structure. i.e,what is the models folder
// responsible for.

// Bringing in mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for exercise"
      },
      value: {
        type: Number,
        required: "Enter the amount of weight used in Kgs"
      },
      date: {
        type: Date,
        default: Date.now
      }
    });

    const exercise = mongoose.model("exercise", exerciseSchema);

    module.exports = exercise; 