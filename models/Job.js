import mongoose from 'mongoose';
// import validator from 'validator';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide name'],
        maxLength: 50
    },
    position: {
        type: String,
        required: [true, 'Please provide name'],
        maxLength: 100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending',
        maxLength: 100
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'remote', 'internship'],
        default: 'full-time',
    },
    jobLocation: {
        type: String,
        default: 'my city',
        required: true,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }
}, {
    timestamps: true
})



export default mongoose.model('Job', JobSchema);