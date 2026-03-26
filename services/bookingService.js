const { createBooking, updateSeats , getBookingsByUser } = require("../models/bookingModel");

async function bookEventService(db, data) {
  try {
    await db.beginTransaction();

    const updateResult = await updateSeats(
      db,
      data.event_id,
      data.ticket_count
    );

    if (updateResult.affectedRows === 0) {
      throw new Error("Not enough seats available");
    }

    const booking_code = "BOOK_" + Date.now();

    const bookingResult = await createBooking(db, {
      ...data,
      booking_code
    });

    await db.commit();

    return {
      message: "Booking successful",
      bookingId: bookingResult.insertId,
      booking_code
    };

  } catch (error) {
    await db.rollback();
    throw error;
  }
}

async function getBookingsService(db, userId) {
  const bookings = await getBookingsByUser(db, userId);

  return bookings; // even if empty
}

module.exports = { bookEventService, getBookingsService };