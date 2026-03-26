# Event Booking System (Node.js + MySQL)

## Overview

This project is a simple Event Booking System built using Node.js and MySQL.

The idea behind this project is to create a backend system where users can:

* Create events
* View available events
* Book tickets
* Check their bookings
* Mark attendance using a booking code

The system is designed to handle bookings safely and avoid issues like overbooking.

---

## Tech Stack

* Node.js (Express.js)
* MySQL
* REST APIs
* Swagger (OpenAPI)

---

## API Endpoints

### Get all events

```
GET /api/events
```

### Create a new event

```
POST /api/events
```

### Book tickets for an event

```
POST /api/events/:id/book
```

### Get all bookings of a user

```
GET /api/users/:id/bookings
```

### Mark attendance using booking code

```
POST /api/events/:id/attendance
```

---

## How to Run the Project

### 1. Clone the repository

```
git clone : https://github.com/thedhruvguptawork/Event_Booking_System.git
cd Event-Booking-System
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root folder and add:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<your_password>
DB_NAME=event_booking_system
PORT=3000
```

---

### 4. Setup the database

* Run the provided `.sql` file
* Or create the tables manually

---

### 5. Start the server

```
node app.js
```

---

## Testing the APIs

You can test all APIs using:

* Postman (collection included)
* Swagger file (`swagger.yaml`)

---

## What’s Included

* Complete backend code
* Database schema (.sql file)
* Swagger documentation
* Postman collection

---

## Notes

* Dummy users are already added for testing
* Authentication is not included as it was not required in the assignment

---

## Author

Dhruv Gupta
