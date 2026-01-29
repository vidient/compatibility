const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "publicc")));

const CORRECT_ANSWERS = {
  q1: 1,
  q2: 1,
  q3: 1,
  q4: 1,
  q5: 1,
  q6: 0,
  q7: 1,
  q8: 0,
  q9: 0,
  q10: 1
};

app.post("/submit", (req, res) => {
  const userAnswers = req.body;
  let passed = true;

  for (const id in CORRECT_ANSWERS) {
    if (userAnswers[id] !== CORRECT_ANSWERS[id]) {
      passed = false;
      break;
    }
  }

  res.json({
    result: passed ? "pass" : "fail",
    password: passed ? "lapinette" : "perdu"
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "publicc", "indexx.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
