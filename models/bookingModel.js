async function createBooking(db,data){
    const query=`
    Insert into bookings
    (user_id,event_id,ticket_count,booking_date,booking_code)
    VALUES (?, ?, ?, NOW(), ?)
    `;
    const values =[
        data.user_id,
        data.event_id,
        data.ticket_count,
        data.booking_code
    ];
    const [result] = await db.query(query,values);
    return result;
}

async function updateSeats(db,event_id,ticket_count){
    const query= `
    UPDATE events
    SET available_seats = available_seats - ?
    WHERE event_id = ? AND available_seats >= ?
    `;
    const [result]=await db.query(query,[ticket_count,event_id,ticket_count]);
    return result;
}

async function getBookingsByUser(db, userId) {
  const query = "SELECT * FROM bookings WHERE user_id = ?";
  const [rows] = await db.query(query, [userId]);
  return rows;
}


module.exports={createBooking,updateSeats,getBookingsByUser};