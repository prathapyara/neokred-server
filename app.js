import express from "express";
import cors from "cors";
import { router } from "./src/router.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Markdown to HTML conversion endpoint
app.use("/api",router);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


