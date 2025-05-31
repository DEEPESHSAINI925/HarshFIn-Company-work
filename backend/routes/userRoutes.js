const express = require('express');
const { 
  login, 
  create, 
  updateUser, 
  deleteUser, 
  profileuser, 
  Postclient,
  updateProfile,
  update,
  hiredPeopleUser
} = require('../Controller/userController');
const { verifyToken, isClient } = require('../Middleware/userMiddleware');
const { googleLogin } = require('../Controller/googleController');
const upload = require('../Multer/multer');
const router = express.Router();

// Profile routes
router.get('/profile', verifyToken, profileuser);
router.get('/hirePeople',hiredPeopleUser );
// Auth routes
router.post('/register', create);
router.post('/login', login);
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(201).json({
    success: true,
    message: 'User logged out successfully'
  });
});

// Profile update routes
router.put('/update-profile', verifyToken, upload.single('profilePicture'), updateProfile);
router.put('/update-profile-details', verifyToken, updateUser);
router.put('/update', verifyToken, update);
// Other routes
router.delete('/delete', deleteUser);
router.post('/post', verifyToken,upload.array('Images'), Postclient);
router.post('/google-login', googleLogin);

module.exports = router;
