/* eslint-disable no-undef */
// analytical server
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
const connectionString = process.env.MONGO_URI;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://ks-dev.vercel.app"]
    : ["http://localhost:5173"];

console.log("only your allowed dude", allowedOrigins);
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Define a Mongoose schema and model for the signal
const signalSchema = new mongoose.Schema({
  event: { type: String, required: true },
  ipAddress: String,
  userAgent: String,
  referrer: String,
  acceptLanguage: String,
  timestamp: { type: Date, default: Date.now },
});

const Signal = mongoose.model("Signal", signalSchema);

app.get("/", async (req, res) => {
  res.status(200).send({ message: "This API is breathing" });
});

app.post("/send-signal", async (req, res) => {
  try {
    const event = req.body.event;

    if (!event) {
      return res.status(400).send({ error: "Event type is required" });
    }

    const newSignal = new Signal({
      event: event,
      ipAddress: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
      userAgent: req.headers["user-agent"],
      referrer: req.headers["referer"] || req.headers["referrer"],
      acceptLanguage: req.headers["accept-language"],
    });

    // Save to MongoDB
    await newSignal.save();
    res.status(201).send({ message: "Signal received successfully" });
  } catch (error) {
    console.error("Error storing signal:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

app.post("/count-events", async (req, res) => {
  try {
    const { event } = req.body;

    if (!event) {
      return res.status(400).send({ error: "Event name is required" });
    }

    const eventCount = await Signal.countDocuments({ event: event });
    res.status(200).send({ count: eventCount });
  } catch (error) {
    console.error("Error fetching event count:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
