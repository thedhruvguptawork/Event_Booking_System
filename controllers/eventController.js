const connectDB = require("../config/db");
const { createEventService,getEventService } = require("../services/eventService");

async function createEventController(req, res) {
  try {
    const db = await connectDB();

    const data = req.body;

    const result = await createEventService(db, data);

    res.status(201).json(result);

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
}
async function getEventController(req, res) {
  try {
    const db = await connectDB();

    const eventId = req.params.id;

    const event = await getEventService(db, eventId);

    res.status(200).json(event);

  } catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
}


module.exports = { createEventController ,getEventController};