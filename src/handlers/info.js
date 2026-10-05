// src/handlers/info.js
import { Markup } from "telegraf";

export const setupInfoHandler = (bot) => {
  bot.hears("ℹ️ Info & Contact | መረጃ", (ctx) => {
    const infoMessage = `
<b>☕ ፔሻ ቡና | Pesha Coffee</b>
<i>“መሶቦ ዘታርጫ — የፈለጉትን ሁሉ የሚያገኙበት!”</i>

🏆 <b>Welcome to Pesha Coffee House!</b>
From fast food, pasta, and pastries to fresh juices and hot coffee, we have everything you need to enjoy a great time with family and friends!

🛵 <b>#FREE_DELIVERY:</b>
Need delivery at work or home? Just give us a call and we will bring your order right to your doorstep!

📞 <b>Contact & Delivery Numbers:</b>
   • 📱 <code>0473450771</code>
   • 📱 <code>0911828351</code>
   • 📱 <code>0952223626</code> (Nebiyu)

🎁 <b>100GB Internet Challenge:</b>
Help us reach 1,000+ Likes on our promotional page for a chance to win a 100GB Internet Package!

<i>“ወደ ፔሻ ገብተው ‘ይሄ የለም?’ ብለው የሚወጡበት ነገር የለም!”</i> 😂🔥
    `;

    ctx.reply(infoMessage, {
      parse_mode: "HTML",
      ...Markup.inlineKeyboard([
        [Markup.button.url("📍 Open in Google Maps", "https://maps.app.goo.gl/rTVdyHidnLLJNyWb6")],
        [Markup.button.callback("☕ Browse Menu", "show_categories")],
        [Markup.button.callback("🛒 View Cart", "view_cart")],
      ]),
    });
  });
};