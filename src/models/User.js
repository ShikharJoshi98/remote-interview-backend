const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean
    },
    verified_token: {
        type: String
    },
    verified_token_expires: {
        type: Date
    },
    reset_Password_token: {
        type: String
    },
    reset_Password_expires: {
        type: Date
    },
    role: {
        type: String,
        enum: ['interviewer', 'candidate'],
        default: 'candidate'
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function (next) {
    if (this.isModified("password")) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        } catch (error) {
            next(error);
        }
    }    
})

userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;