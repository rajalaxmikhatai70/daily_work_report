const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/all-columns", async (req, res) => {
  try {

    const { email,password,employee_name,phone_no } = req.body;
    const newdata = await pool.query(
      `INSERT INTO users (email,password,name,phone) values ($1,$2,$3,$4)`,[email,password,employee_name,phone_no]
    );
    console.log(newdata.rows.length);
    res.json(newdata);
  } catch (err) {
    console.log(err.message);
  }
});
//post in workeffort table
app.post("/all-columns/work-effort", async (req, res) => {
  try {

    const { daily_effort,offday,signature,created_date} = req.body;
    const newdata = await pool.query(
      `INSERT INTO workeffort (daily_effort,offday,signature,created_date) values ($1,$2,$3,$4)`,[daily_effort,offday,signature,created_date]
    );
    console.log(newdata.rows.length);
    res.json(newdata);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/all-columns", async (req, res) => {
  try {
    const alldata = await pool.query("SELECT * FROM users");
    res.send(alldata.rows);
  } catch (err) {
    console.log(err.message);
  }
});
app.get("/allcolumns/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await pool.query("SELECT * FROM users WHERE id = $1",[id]);
    res.json(user.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
app.put("/columns/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password, employee_name, phone_no } = req.body;
      console.log(id);
      const updateData = await pool.query(
        "UPDATE users SET email = $1, password = $2, employee_name = $3, phone_no = $4 WHERE id = $5",
        [email, password, employee_name, phone_no, id]
      );
  
      console.log(updateData);
      res.json("User information updated successfully");
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server error" });
    }
  });
  

app.listen(5000, () => {
  console.log("server has started");
});
