import {
  getCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  calculateTotal,
} from "./store/cartStore.js";
import { cartInlineKeyboard } from "./keyboards/cartKeyboards.js";

// Render or Update Cart View
const renderCart = (ctx) => {
  const userId = ctx.from.id;
  const cart = getCart(userId);

  if (cart.length === 0) {
    const text = "🛒 <b>Your cart is currently empty.</b>\n\nBrowse our menu to add your favorite drinks!";
    if (ctx.callbackQuery) {
      return ctx.editMessageText(text, { parse_mode: "HTML" });
    }
    return ctx.reply(text, { parse_mode: "HTML" });
  }

  const total = calculateTotal(userId);
  const text = `<b>🛒 Your Shopping Cart</b>\n\n` +
    `Adjust item quantities below:\n` +
    `----------------------------\n` +
    `<b>Total Amount: ${total} ETB</b>`;

  if (ctx.callbackQuery) {
    return ctx.editMessageText(text, {
      parse_mode: "HTML",
      ...cartInlineKeyboard(cart),
    });
  }

  return ctx.reply(text, {
    parse_mode: "HTML",
    ...cartInlineKeyboard(cart),
  });
};

// Listeners

// View Cart Command / Button
bot.hears("🛒 View Cart", (ctx) => renderCart(ctx));

// Increment Quantity (+)
bot.action(/^inc_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  updateQuantity(ctx.from.id, itemId, 1);
  ctx.answerCbQuery("Quantity increased");
  renderCart(ctx);
});

// Decrement Quantity (-)
bot.action(/^dec_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  updateQuantity(ctx.from.id, itemId, -1);
  ctx.answerCbQuery("Quantity decreased");
  renderCart(ctx);
});

// Remove Single Item (❌)
bot.action(/^remove_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  removeFromCart(ctx.from.id, itemId);
  ctx.answerCbQuery("Item removed from cart");
  renderCart(ctx);
});

// Clear Entire Cart
bot.action("clear_cart", (ctx) => {
  clearCart(ctx.from.id);
  ctx.answerCbQuery("Cart cleared!");
  renderCart(ctx);
});

// Ignore clicks on static Qty display button
bot.action("noop", (ctx) => ctx.answerCbQuery());