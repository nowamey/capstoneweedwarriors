import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import {v4 as uuidv4} from 'uuid';

const app = express();
//by default, parse data as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
})
connection.connect()

/*module.exports = app => {
  const weedData = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", weedData.create);

  // Retrieve all Tutorials
  router.get("/", weedData.findAll);

  // Retrieve all published Tutorials
  router.get("/published", WeedData.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", WeedData.findOne);

  // Update a Tutorial with id
  router.put("/:id", WeedData.update);

  // Delete a Tutorial with id
  router.delete("/:id", WeedData.delete);

  // Delete all Tutorials
  router.delete("/", WeedData.deleteAll);

  app.use('/api/tutorials', router);
};*/

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

app.listen(process.env.PORT, () =>
    console.log(`listening at http://localhost:${process.env.PORT}`),
);

