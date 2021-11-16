const router = require("express").Router();
const Transaction = require("../models/exercise.js");

// so we need to create a post request to create new exercises within an existing workout plan. The question is: Is there an existing workout plan
// or do I need to create one?

router.post("/api/exercise")