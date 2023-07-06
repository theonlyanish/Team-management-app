//https://hub.packtpub.com/building-task-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const users = require('./routes/users');
const tasks = require('./routes/tasks');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use("/", express.static(path.join(__dirname, "dist/proj-app")));

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true}, function (err) {
  if (err) {
    return console.log('Mongoose - connection error:', err);
  }
  console.log('Connect Successfully');
});


//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/users', users.getUsers);
app.post('/users', users.createUser);
app.get('/users/:id', users.getUser);
app.put('/users/:id', users.updateUser);
//app.put('/users/:actorName/:taskTitle', users.addtask);
app.delete('/users/:id', users.deleteUser);
//app.delete('/users/:actorId/:taskId', users.removetask);

//task RESTFul  endpoints
app.get('/tasks', tasks.getTasks);
app.post('/tasks', tasks.createTask);
app.get('/tasks/:id', tasks.getTask);
app.put('/tasks/:id', tasks.updateTask);
app.delete('/tasks/:id', tasks.deleteTask);
//app.delete('/tasks/:taskId/:actorId', tasks.removeActor);
//app.put('/tasks/:taskTitle/:actorName', tasks.addActor);
//app.get('/tasks/:year1/:year2', tasks.getAllYear);

app.listen(4200);
console.log("Server running at http://localhost:4200");
