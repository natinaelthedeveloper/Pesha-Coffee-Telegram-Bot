# ☕ Pesha Coffee Telegram Bot (ፔሻ ቡና)

> *"መሶቦ ዘታርጫ — የፈለጉትን ሁሉ የሚያገኙበት!"*

An interactive, full-featured Telegram E-Commerce Bot built for **Pesha Coffee House** in Ethiopia using Node.js and Telegraf. The bot allows customers to browse the full menu (burgers, burritos, pasta, juices, coffee, and breakfast), manage a dynamic shopping cart in real-time, view location/contact info, and place free delivery orders.

---

## 🌟 Key Features

- **🍔 Interactive Digital Menu:** Categorized food and drink menu extracted from Pesha Coffee's official offerings (Fast Food, Burritos, Pasta, Fresh Juices, Hot Drinks, and Breakfast).
- **🛒 Real-Time Cart Management:** In-memory cart store with dynamic `➕` / `➖` quantity adjustments, subtotal calculations (in ETB), and item removal directly inside Telegram inline keyboards.
- **🛵 Free Delivery Info & Contact:** Dedicated shop information section highlighting contact numbers (`0473450771`, `0911828351`, `0952223626`) and opening hours.
- **🎁 Promotional Highlights:** Information on active promotions and giveaways (such as the 100GB Internet package challenge).
- **⚡ Modern ES6 Architecture:** Built using ES6 Module syntax (`import`/`export`) and modular file structures (`keyboards`, `handlers`, `store`, `data`).

---

## 📁 Project Structure

```text
Pesha-Coffee/
├── src/
│   ├── data/
│   │   └── menu.js          # Menu categories and item list with ETB pricing
│   ├── handlers/
│   │   └── info.js          # Info & Contact message handler
│   ├── keyboards/
│   │   ├── cartKeyboards.js # Inline keyboards for cart & quantity adjustments
│   │   └── menuKeyboards.js # Reply keyboard & category inline keyboards
│   ├── store/
│   │   └── cartStore.js     # In-memory user cart manager
│   └── index.js             # Main application entry point
├── .env                     # Environment variables (Bot Token)
├── .gitignore               # Ignored files (node_modules, .env)
├── package.json             # Project dependencies and ESM setup
└── README.md                # Project documentation