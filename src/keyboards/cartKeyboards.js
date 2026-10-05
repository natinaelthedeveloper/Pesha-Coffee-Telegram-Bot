import { Markup } from "telegraf";

export const cartInlineKeyboard = (cart) => {
  const buttons = [];

  cart.forEach(({ item, quantity }) => {
    // Row 1: Item Name & Subtotal
    buttons.push([
      Markup.button.callback(
        `${item.name} (${item.price * quantity} ETB)`,
        `info_${item.id}`
      ),
    ]);

    // Row 2: Quantity adjustment controls [-] [Qty] [+] [❌]
    buttons.push([
      Markup.button.callback("➖", `dec_${item.id}`),
      Markup.button.callback(`Qty: ${quantity}`, `noop`), // Non-action display button
      Markup.button.callback("➕", `inc_${item.id}`),
      Markup.button.callback("❌", `remove_${item.id}`),
    ]);
  });

  // Action row: Clear Cart & Checkout
  buttons.push([
    Markup.button.callback("🗑️ Clear Cart", "clear_cart"),
    Markup.button.callback("✅ Checkout", "checkout_start"),
  ]);

  // Navigation row
  buttons.push([Markup.button.callback("☕ Back to Menu", "show_categories")]);

  return Markup.inlineKeyboard(buttons);
};