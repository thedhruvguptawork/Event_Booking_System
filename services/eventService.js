const { createEvent,getEventById } = require("../models/eventModel");

async function createEventService(db, data) {

  if (!data.event_title || !data.event_date || !data.total_capacity) {
    throw new Error("Missing required fields");
  }

  if (data.total_capacity <= 0) {
    throw new Error("Capacity must be greater than 0");
  }

  const result = await createEvent(db, data);

  return {
    message: "Event created successfully",
    eventId: result.insertId
  };
}


async function getEventService(db, eventId) {
  const event = await getEventById(db, eventId);

  if (!event) {
    throw new Error("Event not found");
  }

  return event;
}



module.exports = { createEventService,getEventService };