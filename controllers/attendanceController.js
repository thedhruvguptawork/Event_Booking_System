const connectDB = require("../config/db");
const { markAttendanceService } = require("../services/attendanceService");

async function markAttendanceController(req, res) {
  try {
    const db = await connectDB();

    const booking_code = req.body.booking_code;

    const result = await markAttendanceService(db, booking_code);

    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
}

module.exports = { markAttendanceController };