const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: function () {
            return !this.googleId; // Password is required only if googleId is not present
        }
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true // Allows multiple null/undefined values
    },

    resetOtp: {
        type: String,
        default: ''
    },
    resetOtpExpire: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
