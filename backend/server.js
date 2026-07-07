const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passportConfig = require('./lib/passportConfig');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

// MongoDB
mongoose
  .connect("mongodb+srv://Navneet:navneet1643@atlascluster.sv0vmgr.mongodb.net/hirehub?retryWrites=true&w=majority&appName=AtlasCluster", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('Connected to DB'))
  .catch((err) => console.log(err));

// initialising directories
if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}
if (!fs.existsSync('./public/resume')) {
  fs.mkdirSync('./public/resume');
}
if (!fs.existsSync('./public/profile')) {
  fs.mkdirSync('./public/profile');
}

const app = express();
const port = 4444;

app.use(bodyParser.json({limit: '10mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({limit: '10mb', extended: true})); // support encoded bodies

// Setting up middlewares
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Routing
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/apiRoutes'));
app.use('/upload', require('./routes/uploadRoutes'));
app.use('/host', require('./routes/downloadRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const passportConfig = require('./lib/passportConfig');
// const cors = require('cors');
// const fs = require('fs');
// require('dotenv').config();

// // MongoDB
// mongoose
//   mongoose.connect(
//     "mongodb+srv://Navneet:navneet1643@atlascluster.sv0vmgr.mongodb.net/hirehub?retryWrites=true&w=majority&appName=AtlasCluster" , {
//   // "mongodb+srv://navneetsaini1643_db_user:YOUR_PASSWORD@navneet1643.gopc4z3.mongodb.net/hirehub?retryWrites=true&w=majority&appName=Navneet1643" , {

//   //.connect('mongodb+srv://manav1186:manavG1186@bee.y9g8wcu.mongodb.net/?retryWrites=true&w=majority', {
//   // .connect('mongodb+srv://namanattlee:naman2001@bee.hii2tix.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then((res) => console.log('Connected to DB'))
//   .catch((err) => console.log(err));

// // initialising directories
// if (!fs.existsSync('./public')) {
//   fs.mkdirSync('./public');
// }
// if (!fs.existsSync('./public/resume')) {
//   fs.mkdirSync('./public/resume');
// }
// if (!fs.existsSync('./public/profile')) {
//   fs.mkdirSync('./public/profile');
// }

// const app = express();
// const port = 4444;

// app.use(bodyParser.json({limit: '10mb'})); // support json encoded bodies
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true})); // support encoded bodies

// // Setting up middlewares
// app.use(cors());
// app.use(express.json());
// app.use(passportConfig.initialize());

// // Routing
// app.use('/auth', require('./routes/authRoutes'));
// app.use('/api', require('./routes/apiRoutes'));
// app.use('/upload', require('./routes/uploadRoutes'));
// app.use('/host', require('./routes/downloadRoutes'));

// app.listen(port, () => {
//   console.log(`Server started on port ${port}!`);
// });

