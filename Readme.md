Event Booking System(Using Node.js and MYSQL)

Overview: This is a event booking system developed usig nodejs and mysql database.
User can create events, book tickets, view events

Tech Stack:
Node.js
MySQL
Rest api
OpenApi(Swagger) for documentation

API Endpoints

1. Get all events
    GET /api/events

2. Create event
    POST /api/events

3. Book tickets
    POST /api/events/:id/book


4. Get user bookings
    GET /api/users/:id/bookings

5. Mark attendance
    POST /api/events/:id/attendance


Setup Instructions
1. Clone repository
git clone <your-repo-link>
cd event-booking-system

2. Install dependencies
npm install

3. Setup environment variables

Create .env file:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=event_booking_system
PORT=3000

4. Setup database
Run the provided .sql file
Or manually create tables

5. Run server
node app.js


Testing
Use:
Postman collection (included)
Swagger file (swagger.yaml)

Submission Includes
GitHub Repository
README.md
Database Schema (.sql)
Swagger Documentation
Postman Collection

Notes:
Dummy users are pre-inserted for testing