const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
    coordinator: String,
    student: String,
    title: String,
    body: String,
    img: { data: Buffer, contentType: String },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date
});

mongoose.model('surveys', surveySchema);
