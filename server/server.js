const cors = require("cors");
const body_parser = require("body-parser");
const express = require("express");

const app = express();
const conn = require("./connect");

var data = [];

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extend: true }));
app.use(body_parser.json());

// get data from database
const fetchData = () => {
  const request = "select * from tasks";
  conn.connect.query(request, (err, results) => {
    if (err) {
      console.log("error :", err);
      if (err) {
        console.log(err);
        throw err;
      }
    }
    data = results;
  });
};
fetchData();

app.post("/send-data", (req, res) => {
  const { task } = req.body;
  const completed = false;

  const request = `insert into tasks (description, completed) values (?, ?);`;
  conn.connect.query(request, [task, completed], (err, result) => {
    if (err) {
      console.log("error :", err);
      res.status(500).send("error inserting data ");
    }
    res.status(200).send("data inserted succesfully");
  });
  console.log(`task "${task}" added correctly`);
});

app.post("/delete-data", (req, res) => {
  const { id } = req.body;
  const request = `delete from tasks where id = ?;`;
  conn.connect.query(request, [id], (err, result) => {
    if (err) {
      console.log("error :", err);
      res.status(500).send("error deleting data");
    } else {
      fetchData();
      res.status(200).send("data deleted succesfully !");
    }
  });
  console.log("task deletd ! "); 
});

app.post("/update-data", (req, res) => {
  const { id, completed } = req.body;
  const request = `update tasks set completed = ? where id =?`;

  conn.connect.query(request, [completed, id], (err, result) => {
    if (err) {
      console.log("error :", err);
      res.status(500).send("error updating data");
    } else {
      fetchData();
      res.status(200).send("data updated succesfully !");
    }
  });
  console.log("data updatet succesfully");
});

app.get("/data", (req, res) => {
  res.json(data);
});

const port = 3001;
const message = console.log(`server started on ${port}`);
app.listen(port, message);
