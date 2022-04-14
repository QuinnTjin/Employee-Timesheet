const express = require("express");

const Shift = require("../models/shift");
// const checkAuth = require("../middleware/check-auth.js");

const router = express.Router();

//adding shift
router.post("/api/shifts", (req, res, next) => {
    const shift = new Shift({
        date: req.body.date,
        timestart: req.body.timestart,
        timeout: req.body.timeout,
        active: req.body.active
    });
    shift.save().then(createdShift => {
      res.status(201).json({
        message: "Shift added successfully",
        shiftId: createdShift._id
      });
    });
});

//getting shift
router.get("/api/shifts", (req, res, next) => {
    Shift.find().then(documents => {
      res.status(200).json({
        message: "Shifts fetched successfully!",
        shifts: documents
      });
    });
});


module.exports = router;
