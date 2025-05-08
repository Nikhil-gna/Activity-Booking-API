import { Router } from "express";
import {
  createActivity,
  listAllActivity,
  getActivityById,
  updateActivity,
  deleteActivity,
} from "../controllers/activity.controller.js";

const activityRouter = Router();

activityRouter.post("/", createActivity);
activityRouter.get("/", listAllActivity);
activityRouter.get("/:id", getActivityById);
activityRouter.put("/:id", updateActivity);
activityRouter.delete("/:id", deleteActivity);

export default activityRouter;
