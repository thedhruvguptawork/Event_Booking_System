async function getBookingByCode(db, booking_code) {
  const query = `
    SELECT ticket_count 
    FROM bookings 
    WHERE booking_code = ?
  `;

  const [rows] = await db.query(query, [booking_code]);
  return rows[0];
}

module.exports = { getBookingByCode };