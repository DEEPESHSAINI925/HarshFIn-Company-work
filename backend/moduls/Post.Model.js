const mongoose = require("mongoose");

const Post = mongoose.Schema({
    postname: {
        type: String,
        required: [true, 'Post name is required'],
        trim: true
    },
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: ''
    },
    hourlyRate: {
        type: Number,
        default: 0
    },
    isPro: {
        type: Boolean,
        default: false
    },
    skills: [{
        type: String,
        trim: true
    }],
    portfolioImages: {
        type: [],
        default:[]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, 'User reference is required']
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const post = mongoose.model("post", Post);
module.exports = post;