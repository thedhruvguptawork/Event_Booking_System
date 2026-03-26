async function createEvent(db, data) {
  const {
    event_title,
    event_desc,
    event_date,
    total_capacity
  } = data;

  const query = `
    INSERT INTO events 
    (event_title, event_desc, event_date, total_capacity, available_seats)
    VALUES (?, ?, ?, ?, ?)
  `;

  const values = [
    event_title,
    event_desc,
    event_date,
    total_capacity,
    total_capacity // available_seats = total_capacity initially
  ];

  const [result] = await db.query(query, values);
  return result;
}

async function getEventById(db, eventId) {
  const query = "SELECT * FROM events WHERE event_id = ?";
  const [rows] = await db.query(query, [eventId]);
  return rows[0];
}



module.exports = { createEvent , getEventById};