// src/store/cartStore.js

const userCarts = new Map();

export const getCart = (userId) => {
  if (!userCarts.has(userId)) {
    userCarts.set(userId, []);
  }
  return userCarts.get(userId);
};

// Add this function back so src/index.js can import it
export const addToCart = (userId, item) => {
  const cart = getCart(userId);
  const existingIndex = cart.findIndex((i) => i.item.id === item.id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ item, quantity: 1 });
  }
};

export const updateQuantity = (userId, itemId, delta) => {
  const cart = getCart(userId);
  const itemIndex = cart.findIndex((i) => i.item.id === itemId);

  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;

    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
};

export const removeFromCart = (userId, itemId) => {
  const cart = getCart(userId);
  userCarts.set(userId, cart.filter((i) => i.item.id !== itemId));
};

export const clearCart = (userId) => {
  userCarts.set(userId, []);
};

export const calculateTotal = (userId) => {
  const cart = getCart(userId);
  return cart.reduce((total, i) => total + i.item.price * i.quantity, 0);
};