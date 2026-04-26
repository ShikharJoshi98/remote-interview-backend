const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    isAccepted: {
        type: Boolean,
        required: true,
        default: false
    },
    interviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    jobRole: {
        type: String,
        required: true,
    },
    interviewType: {
        type: String,
        required: true
    },
    interviewMode: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    extraNotes: {
        type: String
    }
}, {
    timestamps: true
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;