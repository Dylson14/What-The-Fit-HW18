const router = require("express").Router();
const Transaction = require("../models/Workout.js");

// so we need to create a post request to create new exercises within an existing workout plan. The question is: Is there an existing workout plan
// or do I need to create one?

// we will first work backwards starting from getting the workouts.
// getting all the workouts
router.get("/api/workouts", (req, res => {
        db.Workout
}))
