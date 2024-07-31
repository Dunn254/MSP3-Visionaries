// routes/cart.js
const express = require('express');
const Cart = require('../models/cart');
const router = express.Router();

// Middleware to get the user (example, might use authentication middleware)
const getUser = (req, res, next) => {
  // Assuming user ID is stored in req.user after authentication
  req.user = { _id: 'someUserId' };
  next();
};

// Add item to cart
router.post('/add', getUser, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

module.exports = router;
