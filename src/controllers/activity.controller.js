import { Activity } from "../models/activity.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createActivity = asyncHandler(async (req, res) => {
  const { title, description, date, time, location } = req.body;
  if (
    [title, description, date, time, location].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const activity = await Activity.create({
    title,
    description,
    date,
    time,
    location,
  });
  return res
    .status(201)
    .json(
      new ApiResponse(201, activity, "activity created successfully", true)
    );
});

const listAllActivity = asyncHandler(async (req, res) => {
  const activities = await Activity.find();
  if (!activities) {
    throw new ApiError(404, "activities not found");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, activities, "activities found successfully", true)
    );
});

const getActivityById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findById(id);
  if (!activity) {
    throw new ApiError(404, "activity not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, activity, "activity found successfully", true));
});

const updateActivity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, date, time, location } = req.body;

  const activity = await Activity.findByIdAndUpdate(
    id,
    {
      title,
      description,
      date,
      time,
      location,
    },
    {
      new: true,
    }
  );
  if (!activity) {
    throw new ApiError(404, "activity not found");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, activity, "activity updated successfully", true)
    );
});

const deleteActivity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByIdAndDelete(id);
  if (!activity) {
    throw new ApiError(404, "activity not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "activity deleted successfully", true));
});

export {
  createActivity,
  listAllActivity,
  getActivityById,
  updateActivity,
  deleteActivity,
};
