const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const role = "client";
    const status = "active";

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      role,
      status,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(201).json({ message: 'signup successful' });
  } catch (error) {
    console.error('Server error:', error); // Log the error for debugging

    // Send a detailed error message in development mode
    if (process.env.NODE_ENV === 'development') {
      res.status(500).json({ message: 'Server error', error: error.message });
    } else {
      // Send a generic error message in production
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

