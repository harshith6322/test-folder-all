// app.js
import express from "express";
const app = express();

function heavyComputation() {
  let sum = 0;
  const iterations = Math.floor(Math.random() * 1e8); // Random number of iterations between 0 and 100,000,000
  for (let i = 0; i < iterations; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
}
///hiiii
//hi
//hi

app.get("/compute", (req, res) => {
  const result = heavyComputation();
  res.send(`Computation result: ${result}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
