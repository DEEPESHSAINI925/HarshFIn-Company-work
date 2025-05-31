const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,               
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'default-profile.png'
    },
    role: {
        type: String,
        enum: ['freelancer', 'client', 'admin'],
        default: 'freelancer',
        required: true
    },
    skills: {
        type: [String],
        trim: true
    },
    education: {
        type: String
    },
    phoneNumber: {
        type: Number,
        default: 0
    },
    location: {
        country: String,
        city: String
    },
    languages: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    lastActive: {
        type: Date,
        default: Date.now
    },
    authProvider: {
        type: String,
        enum: ['local', 'google'],
        default: 'local'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }],
    totalPosts: {
        type: Number,
        default: 0
    },
    completedPosts: {
        type: Number,
        default: 0
    },
    addtocard:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post',
        default:[]
    }]
}, {
    timestamps: true
});

const user = mongoose.model('user', userSchema);
module.exports = user;
