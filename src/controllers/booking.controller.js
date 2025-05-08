import { Activity } from "../models/activity.model.js";
import { Booking } from "../models/booking.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const bookActivity = asyncHandler(async (req, res) => {
  const { activityId } = req.body;

  const activity = await Activity.findById(activityId);
  if (!activity) {
    throw new ApiError(404, "Activity not found");
  }

  const existingBooking = await Booking.findOne({
    activity: activityId,
    user: req.user._id,
  });

  if (existingBooking) {
    throw new ApiError(400, "You have already booked this activity");
  }

  const booking = await Booking.create({
    activity: activityId,
    user: req.user._id,
  });

  if (!booking) {
    throw new ApiError(500, "Something went wrong, booking not created");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, booking, "Booking created successfully", true));
});

const getMyBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("activity")
    .populate({
      path: "user",
      select: "username email",
    });

  if (!bookings || bookings.length === 0) {
    throw new ApiError(404, "Bookings not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, bookings, "Bookings found successfully", true));
});

const cancelBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByIdAndDelete(id);
  if (!booking) {
    throw new ApiError(404, "booking not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, booking, "booking deleted successfully", true));
});

export { bookActivity, getMyBookings, cancelBooking };
