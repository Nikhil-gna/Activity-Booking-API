# Activity Booking API

This project is a simple RESTful API backend for a **Activity Booking App**.

---

## Live Deployment

> Hosted API: [https://activity-booking-api-58n3.onrender.com](https://activity-booking-api-58n3.onrender.com)

---

## Postman Collection

A complete Postman collection is included in the repo:

> Postman Docs: [https://documenter.getpostman.com/view/23451596/2sB2j96oE7](https://documenter.getpostman.com/view/23451596/2sB2j96oE7)

---

## Features

- User Registration & Login (with JWT)
- List Public Activities (cricket, football, movies, etc.)
- Book an Activity (authorized users only)
- View User Bookings
- Clean project structure (controllers, routes, models)
- Password hashing with bcrypt
- MongoDB with Mongoose ORM
- Hosted live on Render

---

## Tech Stack

- **Backend**: Node.js + Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT
- **Testing**: Postman

---

## Installation

1. **Clone the repo**

```bash
git clone https://github.com/Nikhil-gna/Activity-Booking-API.git
cd Activity-Booking-API
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root with the following (see `.env.sample` for reference):

```env
    PORT=
    MONGO_URI=
    DB_NAME=
    CORS_ORIGIN=
    ACCESS_TOKEN_SECRET=
    ACCESS_TOKEN_EXPIRY=
    REFRESH_TOKEN_SECRET=
    REFRESH_TOKEN_EXPIRY=

```

4. **Run the server**

```bash
npm run dev
```

---

## API Endpoints

### Auth

| Method | Route                   | Description              |
| ------ | ----------------------- | ------------------------ |
| POST   | `/api/v1/auth/register` | Register user            |
| POST   | `/api/v1/auth/login`    | Login and set cookies    |
| GET    | `/api/v1/auth/me`       | Get current user         |
| POST   | `/api/v1/auth/logout`   | Logout and clear cookies |

### Activities

| Method | Route                    | Description         |
| ------ | ------------------------ | ------------------- |
| GET    | `/api/v1/activities`     | List all activities |
| POST   | `/api/v1/activities`     | Create activity     |
| GET    | `/api/v1/activities/:id` | Get activity by ID  |
| PUT    | `/api/v1/activities/:id` | Update activity     |
| DELETE | `/api/v1/activities/:id` | Delete activity     |

### Bookings

| Method | Route                 | Description      |
| ------ | --------------------- | ---------------- |
| POST   | `/api/v1/booking`     | Book an activity |
| GET    | `/api/v1/booking/me`  | Get my bookings  |
| DELETE | `/api/v1/booking/:id` | Cancel a booking |

---
