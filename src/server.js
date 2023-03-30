import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import {v4 as uuidv4} from 'uuid';

const app = express();
//by default, parse data as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});


app.listen(process.env.PORT, () =>
    console.log(`listening at http://localhost:${process.env.PORT}`),
);

