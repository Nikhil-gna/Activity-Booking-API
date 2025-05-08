import { Router } from "express";
import {
  bookActivity,
  getMyBookings,
  cancelBooking,
} from "../controllers/booking.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const bookingRouter = Router();

bookingRouter.post("/", verifyJWT, bookActivity);
bookingRouter.get("/", verifyJWT, getMyBookings);
bookingRouter.delete("/:id", verifyJWT, cancelBooking);

export default bookingRouter;
