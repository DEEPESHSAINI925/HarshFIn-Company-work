const User = require('../moduls/userModel');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
    try {
        const { tokens } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: tokens,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const { email, name, picture } = ticket.getPayload();

        // Check if user exists
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if doesn't exist
            user = await User.create({
                email,
                username: name,
                profilePicture: picture,
                password: 'google-oauth-' + Math.random().toString(36).slice(-8), // Random password for Google users
                role: 'freelancer', // default role
                isVerified: true // Google users are automatically verified
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        res.status(201).json({
            success: true,
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture,
                isVerified: user.isVerified
            }
        });

    } catch (error) {
        console.error('Google Login Error:', error);
        res.status(500).json({
            success: false,
            message: 'Google authentication failed',
            error: error.message
        });
    }
};

module.exports = { googleLogin };