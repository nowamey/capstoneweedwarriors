import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {v4 as uuidv4} from 'uuid';

let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };
  
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };

const app = express();
//by default, parse data as json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get('/users/:userId',(req,res) => {
    return res.send(users[req.params.userId])
})

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});
  
app.post('/users', (req, res) => {
    return res.send('Received a POST HTTP method on user resource');
});
  
app.put('/users/:userId', (req, res) => {
    return res.send(`Received a PUT HTTP method on user ${req.params.userId}`);
});
  
app.delete('/users/:userId', (req, res) => {
    return res.send(`Received a DELETE HTTP method on user ${req.params.userId}`);
});
app.listen(process.env.PORT, () =>
    console.log(`listening at http://localhost:${process.env.PORT}`),
);
app.post('/messages', (req, res) => {
  
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
 

