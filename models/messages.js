const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    from: {type: String},
    room: {type: String},
    msg: {type: String, required: true},
    createon: {type: Date, default : Date.now}
});

const Msg = mongoose.model("msg", msgSchema);
module.exports= Msg;