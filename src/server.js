import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {v4 as uuidv4} from 'uuid';

const app = express();
//by default, parse data as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

require("C:/Users/nowam/Documents/GitHub/capstoneweedwarriors/src/routes/dbroutes.js")(app);

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
app.listen(process.env.PORT, () =>
    console.log(`listening at http://localhost:${process.env.PORT}`),
);
/*app.post('/messages', (req, res) => {
  
  console.log(req.body.text);
  const id = uuidv4();
  const text = req.body.text;
  const message = {
    id,
    text
  };

  messages[id] = message;

  return res.send(message);
});

app.get('/messages',(req,res) => {
    return res.send(Object.values(messages));
});
app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
  });
*/ 

