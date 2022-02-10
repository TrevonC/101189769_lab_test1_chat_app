const mongoose = require('mongoose');
const app = require('express')();
const http = require(http).createServer(app)
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const JWTPRIVATEKEY = 'forejhf028f0efhi'

// Import Models
const Msg = require('./models/messages')
const pMsg = require('./models/pmessages')
const User = require('./models/user')

const io = require('socket.io')(http)
app.use(express.json());
app.use(cors())

// Connecting to Database
const mongoDB = 'mongodb+srv://admin:admin@cluster0.7apzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    console.log('..Database Connected!')
}).catch(err => console.log(err));
const port = 5500;

//Create Logins, Registration, Logout
//Join Room, Send Message, Disconnect

//Start HTTP server
http.listen(port, () => {
    console.log(`Server running at PORT ${port}`)
});