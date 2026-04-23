const express = require("express");
const app = express();

app.use(express.json());

// ─── Root Route ───────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    message: "🧮 Calculator API is running!",
    endpoints: [
      "POST /add",
      "POST /subtract",
      "POST /multiply",
      "POST /divide",
    ],
    usage: {
      body: { a: "number", b: "number" },
      example: { a: 10, b: 5 },
    },
  });
});

// ─── Addition ─────────────────────────────────────────────────
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined)
    return res.status(400).json({ error: "Please provide both 'a' and 'b'" });
  res.json({ operation: "addition", a, b, result: a + b });
});

// ─── Subtraction ──────────────────────────────────────────────
app.post("/subtract", (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined)
    return res.status(400).json({ error: "Please provide both 'a' and 'b'" });
  res.json({ operation: "subtraction", a, b, result: a - b });
});

// ─── Multiplication ───────────────────────────────────────────
app.post("/multiply", (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined)
    return res.status(400).json({ error: "Please provide both 'a' and 'b'" });
  res.json({ operation: "multiplication", a, b, result: a * b });
});

// ─── Division ─────────────────────────────────────────────────
app.post("/divide", (req, res) => {
  const { a, b } = req.body;
  if (a === undefined || b === undefined)
    return res.status(400).json({ error: "Please provide both 'a' and 'b'" });
  if (b === 0)
    return res.status(400).json({ error: "Cannot divide by zero" });
  res.json({ operation: "division", a, b, result: a / b });
});

// ─── Start Server ─────────────────────────────────────────────
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Calculator API running at http://localhost:${PORT}`);
});
