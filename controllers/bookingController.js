const connectDB = require("../config/db");
const { bookEventService ,getBookingsService } = require("../services/bookingService");

async function bookEventController(req, res) {
  try {
    const db = await connectDB();

    const event_id = req.params.id;

    const data = {
      user_id: req.body.user_id,
      event_id,
      ticket_count: req.body.ticket_count
    };

    const result = await bookEventService(db, data);

    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
}

async function getUserBookingsController(req, res) {
  try {
    const db = await connectDB();

    const userId = req.params.id;

    const bookings = await getBookingsService(db, userId);

    res.status(200).json(bookings);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { bookEventController,getUserBookingsController };