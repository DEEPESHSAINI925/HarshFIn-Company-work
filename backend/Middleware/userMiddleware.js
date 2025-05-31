const jwt = require('jsonwebtoken');
const User = require('../moduls/userModel');

const verifyToken = async (req, res, next) => {
    try {
        // Get token from request cookies or Authorization header
        let token = req.cookies.token;
        
        // Check Authorization header if token not in cookies
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided, authorization denied'
            });
        }

        // Verify token
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({
                success: false, 
                message: 'Token is not valid'
            });
        }

        // Check if user still exists
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error authenticating user',
            error: error.message
        });
    }
};

const isAdmin = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Admin only.'
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error checking admin status',
            error: error.message
        });
    }
};

const isFreelancer = async (req, res, next) => {
    try {
        if (req.user.role !== 'freelancer') {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Freelancers only.'
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error checking freelancer status',
            error: error.message
        });
    }
};

const isClient = async (req, res, next) => {
    try {
        if (req.user.role !== 'client') {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Clients only.'
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error checking client status',
            error: error.message
        });
    }
};

module.exports = {
    verifyToken,
    isAdmin,
    isFreelancer,
    isClient
};
