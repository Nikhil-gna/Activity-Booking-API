import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

import authRouter from "./routes/auth.routes.js";
import activityRouter from "./routes/activity.routes.js";
import bookingRouter from "./routes/booking.routes.js";
import healthcheck from "./routes/healthcheck.routes.js";

app.get("/", (req, res) => {
  res.send("Welcome to the booking app backend");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/activities", activityRouter);
app.use("/api/v1/booking", bookingRouter);
app.use("/api/v1/healthcheck", healthcheck);

export { app };
