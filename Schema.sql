create database event_booking_system;

use event_booking_system;

CREATE TABLE users (
   user_id INT AUTO_INCREMENT PRIMARY KEY,
   user_name VARCHAR(255) NOT NULL,
   user_email VARCHAR(255) NOT NULL UNIQUE
);

create table Events(
event_id int AUTO_INCREMENT  PRIMARY KEY,
event_title varchar(255) NOT NULL,
event_desc varchar(255),
event_date date NOT NULL,
total_capacity int NOT NULL,
available_seats int NOT NULL
);

create table bookings(
booking_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
event_id INT NOT NULL,
ticket_count INT NOT NULL,
booking_date datetime NOT NULL,
booking_code VARCHAR(100) UNIQUE NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE event_attendance (
   attendance_id INT AUTO_INCREMENT PRIMARY KEY,
   booking_id INT NOT NULL,
   entry_time DATETIME NOT NULL,

   FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);