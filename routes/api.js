const router = require("express").Router();
const Transaction = require("../models/Workout.js");

// so we need to create a post request to create new exercises within an existing workout plan. The question is: Is there an existing workout plan
// or do I need to create one?

// we will first work backwards starting from getting the workouts.
// getting all the workouts
router.get("/api/workouts", (req, res) => {
    // so the Workout is the db that is referenced to or is it created?
        db.Workout.find({}).then(dbWorkout => {
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;
            });

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});

// the next bit neeeded is to add exercises
router.put("/api/workouts/:id", (req, res) => {
// I'd like to know what the bottom bit of code is responsible for
    db.Workout.findOneAndUpdate(
        {_id: req.params.id},
        {
            // what are these dollar signs for? the symbol '$'
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});

// Now is the moment to create a new workout
router.post("api/workouts", ({body}))