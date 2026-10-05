# ☕ Pesha Coffee Telegram Bot

> **"መሶቦ ዘታርጫ — የፈለጉትን ሁሉ የሚያገኙበት!"**

This is a Telegram e-commerce bot I built for **Pesha Coffee House** in Ethiopia.

The main idea was simple: instead of customers having to call or visit the shop to check the menu, they can open the Telegram bot, browse the available food and drinks, add items to a cart, and check their order directly from Telegram.

I built the project with **Node.js and Telegraf**, with a focus on learning how real-world Telegram bots and shopping-cart systems work.

---

## 🔴 Live Bot

You can try the bot here:

👉 **[Open Pesha Coffee Bot on Telegram](https://t.me/peshaCoffee_bot)**


### 🎁 Promotions

There is also a section for promotions and special offers, so the business can share current campaigns and giveaways with customers.

---

## 🧠 What I Learned From This Project

This project was mainly a learning experience for me, and I learned quite a lot while building it.

### 🤖 Telegram Bot Development

I learned how to:

* Create a Telegram bot using BotFather
* Connect a Node.js application with Telegram
* Work with the Telegraf library
* Handle `/start` commands
* Handle callback queries
* Create inline keyboards
* Build interactive menus
* Respond to user actions

### 🟢 Node.js

I practiced working with:

* Node.js
* JavaScript ES6
* `import` and `export`
* Async/await
* Functions
* Arrays and objects
* Environment variables
* npm packages

### 🛒 Shopping Cart Logic

One of the most useful parts of this project was building the cart.

I had to think about things like:

```text
User
 ↓
Select Product
 ↓
Add to Cart
 ↓
Change Quantity
 ↓
Calculate Total
 ↓
Review Cart
```

This helped me understand the basic logic behind an e-commerce application.

### 💾 Managing User Data

For this version, I used an **in-memory store** to keep each user's cart.

For example:

```text
User 1
 └── Burger × 2
 └── Coffee × 1

User 2
 └── Pasta × 1
 └── Juice × 2
```

This was a good way for me to understand how user-specific state works.

### ⌨️ Inline Keyboards

I also learned how to make Telegram buttons that users can interact with instead of only sending text messages.

For example:

```text
🍔 Burger
☕ Coffee
🥤 Fresh Juice

➕  2  ➖

🗑️ Remove
🛒 View Cart
```

This makes the bot feel much more like a small application inside Telegram.

---

## 🛠️ Technologies I Used

* **Node.js** — backend/runtime
* **Telegraf** — Telegram bot framework
* **JavaScript (ES6)** — application logic
* **dotenv** — environment variables
* **npm** — package management
* **Telegram Inline Keyboards** — interactive UI

---

## 📁 Project Structure

```text
Pesha-Coffee/
│
├── src/
│   ├── data/
│   │   └── menu.js
│   │
│   ├── handlers/
│   │   └── info.js
│   │
│   ├── keyboards/
│   │   ├── cartKeyboards.js
│   │   └── menuKeyboards.js
│   │
│   ├── store/
│   │   └── cartStore.js
│   │
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

I separated the project into different parts instead of putting everything inside one file. This made it easier to understand and work on each part individually.

---


## 🔐 Environment Variables

The Telegram bot token should not be added directly to the source code.

I keep it inside `.env`:

```env
BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
```

And `.env` is included in `.gitignore`:

```gitignore
node_modules/
.env
```

---

## 🔄 How the Bot Works

The basic flow is:

```text
/start
   ↓
Main Menu
   ↓
Choose Category
   ↓
Choose Product
   ↓
Add to Cart
   ↓
Change Quantity
   ↓
View Cart
   ↓
Check Total
   ↓
Order / Contact
```

---

## 📚 What I Want to Add Next

This is currently a learning/portfolio version, so there are still many things I would like to improve.

Some of my next ideas are:

* MongoDB database
* Save orders permanently
* Customer order history
* Admin dashboard
* Order status updates
* Delivery tracking
* Customer location sharing
* Online payment
* Automatic order notifications
* Digital receipts
* Deploy the bot to a cloud server

The next big step for me is connecting the bot to **MongoDB + Mongoose** so that users, products, and orders can be stored permanently instead of using only in-memory data.



## 👨‍💻 About Me

I'm a **Full-Stack Developer** and I'm currently expanding my backend skills by building projects with **Node.js, APIs, databases, and Telegram bots**.

I enjoy learning by building real projects instead of only following tutorials.

This Pesha Coffee Bot is one of the projects I built to understand how a real ordering system can work inside Telegram.

### 📬 Contact Me

* 💼 LinkedIn: **[My LinkedIn](https://www.linkedin.com/in/natinael-asfaw-aa6116414)**
* 🐙 GitHub: **[My GitHub](https://github.com/natinaelthedeveloper)**
* 📧 Email: **[My email](mailto:natinael6504@gmail.com)**
* 💬 Telegram: **[Contact Me](https://t.me/Forget2me1)**

If you're interested in working together, have a project idea, or just want to connect, feel free to reach out.

---

## ⭐ Support

If you like the project, feel free to give the repository a ⭐ on GitHub.

---

## 📄 Note

This project was built for **learning, practice, and portfolio purposes**.

The goal was to get practical experience building a Telegram bot, handling user interactions, managing cart data, and thinking about how a small e-commerce system works.

---

### ☕ Built with Node.js + Telegraf

**Pesha Coffee Telegram Bot**
*Turning a simple Telegram chat into a small digital ordering experience.*
