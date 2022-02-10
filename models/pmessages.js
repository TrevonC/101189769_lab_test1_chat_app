const mongoose = require('mongoose');

const pMsgSchema = new mongoose.Schema({
    from: {type: String},
    room: {type: String},
    msg: {type: String, required: true},
    createon: {type: Date, default : Date.now}
});

const pMsg = mongoose.model("msg", pMsgSchema);
module.exports= pMsg;