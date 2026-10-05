import "dotenv/config";
import { Telegraf } from "telegraf";
import {
  mainKeyboard,
  categoryInlineKeyboard,
  itemListInlineKeyboard,
  itemDetailKeyboard,
} from "./keyboards/menuKeyboards.js";
import { cartInlineKeyboard } from "./keyboards/cartKeyboards.js";
import { menuItems } from "./data/menu.js";
import {
  addToCart,
  getCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  calculateTotal,
} from "./store/cartStore.js";
import { setupInfoHandler } from "./handlers/info.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

// Helper function to render or update the cart view
const renderCart = (ctx) => {
  const userId = ctx.from.id;
  const cart = getCart(userId);

  if (cart.length === 0) {
    const emptyText =
      "🛒 <b>Your cart is currently empty.</b>\n\nBrowse our menu to add your favorite items!";
    if (ctx.callbackQuery) {
      return ctx.editMessageText(emptyText, { parse_mode: "HTML" });
    }
    return ctx.reply(emptyText, { parse_mode: "HTML" });
  }

  const total = calculateTotal(userId);
  const cartText =
    `<b>🛒 Your Shopping Cart</b>\n\n` +
    `Adjust item quantities below:\n` +
    `----------------------------\n` +
    `<b>Total Amount: ${total} ETB</b>`;

  if (ctx.callbackQuery) {
    return ctx.editMessageText(cartText, {
      parse_mode: "HTML",
      ...cartInlineKeyboard(cart),
    });
  }

  return ctx.reply(cartText, {
    parse_mode: "HTML",
    ...cartInlineKeyboard(cart),
  });
};

// Start command
bot.start((ctx) => {
  const firstName = ctx.from?.first_name || "Valued Guest";

  const welcomeMessage = `
🔥☕ <b>እንኳን ወደ ፔሻ ቡና በደህና መጡ!</b> ☕🔥
<i>"መሶቦ ዘታርጫ — የፈለጉትን ሁሉ የሚያገኙበት!"</i>

👋 ሰላም <b>${firstName}</b>!

ወደ <b>Pesha Coffee House</b> እንኳን ደህና መጡ! 

🍔 <b>Fast Food & Burgers</b> (Burger, Burrito, Sandwich)
🍝 <b>Delicious Meals</b> (Pasta, Macaroni, Special Rice)
🥤 <b>Fresh Juices</b> (Avocado, Mango, Fruit Punch, Ergo)
☕ <b>Hot Drinks</b> (Pesha Special Coffee, Tea, Macchiato)

🛵 <b>#FREE_DELIVERY:</b>
በስራ ቦታዎ ወይም በቤትዎ ሆነው ያዙ፤ ባሉበት ቦታ በፍጥነት እናደርሳለን!

👇 <b>ለመገበየት ከታች ያለውን ማውጫ ይጫኑ:</b>
  `;

  ctx.reply(welcomeMessage, {
    parse_mode: "HTML",
    ...mainKeyboard(),
  });
});

// Menu browsing handlers
bot.hears("🔥 ☕ Browse Menu | ማውጫ", (ctx) => {
  ctx.reply("Select a category:", categoryInlineKeyboard());
});

bot.action(/^category_(.+)$/, (ctx) => {
  const categoryId = ctx.match[1];
  ctx.editMessageText(
    "Choose your coffee or pastry:",
    itemListInlineKeyboard(categoryId)
  );
});

bot.action(/^select_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  const item = menuItems.find((i) => i.id === itemId);
  if (!item) return;

  const caption = `<b>${item.name}</b>\n\n${item.description}\n\n💰 Price: <b>${item.price} ETB</b>`;
  ctx.editMessageText(caption, {
    parse_mode: "HTML",
    ...itemDetailKeyboard(item.id),
  });
});

bot.action(/^add_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  const item = menuItems.find((i) => i.id === itemId);
  if (!item) return;

  addToCart(ctx.from.id, item);
  ctx.answerCbQuery(`Added ${item.name} to your cart! 🛒`);
});

bot.action("show_categories", (ctx) => {
  ctx.editMessageText("Select a category:", categoryInlineKeyboard());
});

// Cart interactions & quantity adjustments
bot.hears("🛒 View Cart | ካርት", (ctx) => renderCart(ctx));

bot.action(/^inc_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  updateQuantity(ctx.from.id, itemId, 1);
  ctx.answerCbQuery("Quantity increased");
  renderCart(ctx);
});

bot.action(/^dec_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  updateQuantity(ctx.from.id, itemId, -1);
  ctx.answerCbQuery("Quantity decreased");
  renderCart(ctx);
});

bot.action(/^remove_(.+)$/, (ctx) => {
  const itemId = ctx.match[1];
  removeFromCart(ctx.from.id, itemId);
  ctx.answerCbQuery("Item removed from cart");
  renderCart(ctx);
});

bot.action("clear_cart", (ctx) => {
  clearCart(ctx.from.id);
  ctx.answerCbQuery("Cart cleared!");
  renderCart(ctx);
});

bot.action("noop", (ctx) => ctx.answerCbQuery());

// Register Info & Contact handler
setupInfoHandler(bot);

// Launch bot
bot.launch();
console.log("🤖 Pesha Coffee House Bot is running...");