import { Markup } from "telegraf";
import { categories, menuItems } from "../data/menu.js";

// Main Menu Options
export const mainKeyboard = () => {
  return Markup.keyboard([
    ["🔥 ☕ Browse Menu | ማውጫ", "🛒 View Cart | ካርት"],
    ["📋 Order Status | የትዕዛዝ ሁኔታ", "ℹ️ Info & Contact | መረጃ"],
  ]).resize();
};

// Category Inline Selection
export const categoryInlineKeyboard = () => {
  const buttons = categories.map((cat) => [
    Markup.button.callback(cat.name, `category_${cat.id}`),
  ]);
  return Markup.inlineKeyboard(buttons);
};

// Item List Inline Selection
export const itemListInlineKeyboard = (categoryId) => {
  const items = menuItems.filter((i) => i.categoryId === categoryId);
  const buttons = items.map((item) => [
    Markup.button.callback(`${item.name} - ${item.price} ETB`, `select_${item.id}`),
  ]);
  buttons.push([Markup.button.callback("⬅️ Back to Categories", "show_categories")]);
  return Markup.inlineKeyboard(buttons);
};

// Item Detail Action Keyboard
export const itemDetailKeyboard = (itemId) => {
  return Markup.inlineKeyboard([
    [Markup.button.callback("➕ Add to Cart", `add_${itemId}`)],
    [Markup.button.callback("⬅️ Back to Menu", "show_categories")],
  ]);
};