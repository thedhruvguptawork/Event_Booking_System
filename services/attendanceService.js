const { getBookingByCode } = require("../models/attendanceModel");

async function markAttendanceService(db, booking_code) {
  const booking = await getBookingByCode(db, booking_code);

  if (!booking) {
    throw new Error("Invalid booking code");
  }

  return {
    tickets: booking.ticket_count
  };
}

module.exports = { markAttendanceService };