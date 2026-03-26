const express = require("express");
const router = express.Router();

const { createEventController ,getEventController} = require("../controllers/eventController");
const { bookEventController,getUserBookingsController } = require("../controllers/bookingController");
const { markAttendanceController } = require("../controllers/attendanceController");



router.post("/events", createEventController);
router.get("/events/:id", getEventController);
router.post("/events/:id/book", bookEventController);
router.get("/users/:id/bookings", getUserBookingsController);
router.post("/events/:id/attendance", markAttendanceController);
module.exports = router;