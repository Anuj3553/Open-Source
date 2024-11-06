const express = require("express");
const { Server } = require("socket.io");
const connectToMongo = require("./db");
const cors = require("cors");
const helmet = require("helmet");
const Avatar = require("./Models/Avatar");
require("dotenv").config(); // Load environment variables from .env file

// Connect to MongoDB
connectToMongo();

const app = express();
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Update to specific origins in production
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

// Correctly set the PORT to listen on
const PORT = process.env.PORT || 5000; // Render will provide the PORT

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

// Set up CORS middleware
app.use(
  cors({
    origin: "*", // Update to specific origins in production
    methods: ["GET", "POST", "OPTIONS", "PUT"],
  })
);

// Middleware to parse JSON requests
app.use(express.json());
app.use(helmet());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/feedback", require("./routes/feedback"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/blog", require("./routes/blog"));
app.use("/api/visitor", require("./routes/visitor"));

// Socket.io connection handling
const users = {};

let currentCode = '// Start coding collaboratively!\n';

io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });

  // Send the current code to the newly connected user
  socket.emit('code_update', currentCode);

  socket.on("send", (message) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: users[socket.id],
    });
  });

  // Listen for code changes and broadcast them
  socket.on('code_change', (newCode) => {
    currentCode = newCode;
    socket.broadcast.emit('code_update', newCode);
  });

  socket.on("disconnect", () => {
    if (users[socket.id]) {
      socket.broadcast.emit("left", users[socket.id]);
      delete users[socket.id];
    }
  });
});

// Start HTTP server - listen on the correct PORT
httpServer
  .listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    console.error("Server error:", err);
  });

// Centralized error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
