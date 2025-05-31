const User = require('../moduls/userModel');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const Post = require("../moduls/Post.Model")
module.exports.create = async (req, res) => {
    try {
        const { email, password, username, role } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ email, role });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create new user
        const user = await User.create({
            email,
            password: hashedPassword,
            username,
            role
        });

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Set JWT token as HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        res.status(201).json({
            success: true,
            token,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'All fields are required',
            error: error.message
        });
    }
},

    // Login user
    module.exports.login = async (req, res) => {
        try {
            const { email, password, role } = req.body;
            // Check if user exists
            const user = await User.findOne({ email, role }).select('+password');
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Email or Password invaild'
                });
            }

            // Check password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: 'Email or Password invaild'
                });
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 24 * 60 * 60 * 1000 // 24 hours
            });

            res.status(201).json({
                success: true,
                token,
                user
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'All fields are required',
                error: error.message
            });
        }
    }

// Update user
module.exports.updateUser = async (req, res) => {
    try {
        // Get token from request cookies
        const token = req.cookies.token;
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
        const userId = decoded.userId;
        const { email, username, location, education, languages, phoneNumber } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                email,
                username,
                location,
                education,
                languages,
                phoneNumber
            },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        });
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const token = req.cookies.token;
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

        const userId = decoded._id;

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting user',
            error: error.message
        });
    }
}
module.exports.profileuser = async (req, res) => {
    let token = req.cookies.token;
    console.log(token)
    try {
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
        const userId = decoded.userId;
        const user = await User.findById({ _id: userId }).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching user profile',
            error: error.message
        });
    }
}
module.exports.Postclient = async (req, res) => {
    try {
        // Get user ID from the authenticated request
        const userId = req.user._id;
        const { postname, profile, tittle, description, hourlyRate, skills, isPro } = req.body;
        const portfolioImages = []
        if (req.files) {
            req.files.map(fi => {
                portfolioImages.push(`./public/uploads/profiles/${fi.filename}`)
            })
        }

        // Create new post
        const post = await Post.create({
            postname,
            tittle,
            description,
            hourlyRate: Number(hourlyRate) || 0,
            skills: skills ? skills.split(',').map(skill => skill.trim()) : [],
            isPro: Boolean(isPro),
            portfolioImages,
            user: userId,
            profile
        });


        // Update user's posts array
        await User.findByIdAndUpdate(
            userId,
            {
                $push: { posts: post._id },
                $inc: { totalPosts: 1 }
            }
        );

        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            post
        });

    } catch (error) {
        console.error('Post creation error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating post',
            error: error.message
        });
    }
};

module.exports.updateProfile = async (req, res) => {
    try {
        console.log(req.user)
        const userId = req.user._id;
        let updateData = {};

        // Handle profile picture update
        if (req.file) {
            updateData.profilePicture = `./public/uploads/profiles/${req.file.filename}`;
        }

        // Update user profile picture
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Profile picture updated successfully',
            user: updatedUser
        });

    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating profile',
            error: error.message
        });
    }
};

// Update user
module.exports.update = async (req, res) => {
    try {
        // Get token from request cookies
        const token = req.cookies.token;
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
        const userId = decoded.userId;
        const { addtocard } = req.body;
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { addtocard } },
            { new: true }
        );
        console.log(updatedUser)
        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating user',
            error: error.message
        });
    }
}

module.exports.hiredPeopleUser = async (req, res) => {
    let token = req.cookies.token;
    console.log(token)
    try {
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
        const userId = decoded.userId;
        const user = await User.findById({ _id: userId }).select('-password').populate('addtocard');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user: user.addtocard
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching user profile',
            error: error.message
        });
    }
}