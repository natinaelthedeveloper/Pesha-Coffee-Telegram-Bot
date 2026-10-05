export const categories = [
  { id: "fast_food", name: "🍔 Fast Food & Burgers" },
  { id: "burritos_sandwiches", name: "🌯 Burritos & Sandwiches" },
  { id: "fries_sides", name: "🍟 Fries & Sides" },
  { id: "pasta_rice", name: "🍝 Pasta, Macaroni & Rice" },
  { id: "breakfast_egg", name: "🍳 Breakfast & Firfir" },
  { id: "juices_drinks", name: "🥤 Fresh Juices & Drinks" },
  { id: "hot_drinks", name: "☕ Hot Drinks & Coffee" },
];

export const menuItems = [
  // 🍔 FAST FOOD & BURGERS
  {
    id: "normal_burger",
    categoryId: "fast_food",
    name: "Normal Burger",
    price: 220,
    description: "Classic beef burger with fresh lettuce, tomatoes, and house sauce.",
  },
  {
    id: "cheese_burger",
    categoryId: "fast_food",
    name: "Cheese Burger",
    price: 260,
    description: "Juicy beef patty topped with melted cheese and fresh salad.",
  },
  {
    id: "special_burger",
    categoryId: "fast_food",
    name: "Special Burger",
    price: 320,
    description: "Pesha house special burger packed with double toppings and egg.",
  },
  {
    id: "double_burger",
    categoryId: "fast_food",
    name: "Double Burger",
    price: 350,
    description: "Double beef patties served with melted cheese and extra sauce.",
  },

  // 🌯 BURRITOS & SANDWICHES
  {
    id: "veg_burrito",
    categoryId: "burritos_sandwiches",
    name: "Vegetable Burrito",
    price: 150,
    description: "Fresh sautéed vegetables wrapped in a soft warm tortilla.",
  },
  {
    id: "cheese_burrito",
    categoryId: "burritos_sandwiches",
    name: "Cheese Burrito",
    price: 180,
    description: "Melted cheese wrapped with fresh veggies and seasoned sauce.",
  },
  {
    id: "special_burrito",
    categoryId: "burritos_sandwiches",
    name: "Special Burrito",
    price: 220,
    description: "Fully loaded special burrito with mixed fillings.",
  },
  {
    id: "egg_sandwich",
    categoryId: "burritos_sandwiches",
    name: "Egg Sandwich",
    price: 120,
    description: "Freshly cooked seasoned eggs in toasted bread.",
  },
  {
    id: "avocado_sandwich",
    categoryId: "burritos_sandwiches",
    name: "Avocado Sandwich",
    price: 130,
    description: "Creamy fresh avocado spread inside crisp toasted bread.",
  },
  {
    id: "veg_sandwich",
    categoryId: "burritos_sandwiches",
    name: "Vegetable Sandwich",
    price: 110,
    description: "Crisp garden vegetables stacked in toasted bread.",
  },
  {
    id: "club_sandwich",
    categoryId: "burritos_sandwiches",
    name: "Club Sandwich",
    price: 240,
    description: "Triple-decker toasted sandwich packed with eggs and veggies.",
  },

  // 🍟 FRIES & SIDES
  {
    id: "french_fries",
    categoryId: "fries_sides",
    name: "French Fries (ቺፕስ)",
    price: 120,
    description: "Crispy golden fried potato chips.",
  },
  {
    id: "ertib_chips",
    categoryId: "fries_sides",
    name: "Ertib Chips (እርጥብ ቺፕስ)",
    price: 140,
    description: "Flavorful seasoned wet fries served hot.",
  },

  // 🍝 PASTA, MACARONI & RICE
  {
    id: "pasta_sugo",
    categoryId: "pasta_rice",
    name: "Pasta with Sugo",
    price: 150,
    description: "Freshly boiled pasta served with rich tomato sugo sauce.",
  },
  {
    id: "pasta_vegetable",
    categoryId: "pasta_rice",
    name: "Vegetable Pasta",
    price: 140,
    description: "Pasta tossed with fresh garden vegetables and herbs.",
  },
  {
    id: "pasta_egg_avocado",
    categoryId: "pasta_rice",
    name: "Pasta with Egg & Avocado",
    price: 180,
    description: "Pasta topped with fresh avocado slices and cooked egg.",
  },
  {
    id: "macaroni_sugo",
    categoryId: "pasta_rice",
    name: "Macaroni Sugo",
    price: 150,
    description: "Macaroni tossed in flavorful tomato sugo.",
  },
  {
    id: "pesha_special_rice",
    categoryId: "pasta_rice",
    name: "Special Rice",
    price: 190,
    description: "Pesha special seasoned rice dish served with delicious sides.",
  },

  // 🍳 BREAKFAST & FIRFIR
  {
    id: "egg_breakfast",
    categoryId: "breakfast_egg",
    name: "Scrambled / Omelet Eggs",
    price: 110,
    description: "Freshly cooked eggs prepared to your preference.",
  },
  {
    id: "special_firfir",
    categoryId: "breakfast_egg",
    name: "Special Firfir",
    price: 160,
    description: "Flavorful traditional Injera firfir prepared with house spice blend.",
  },

  // 🥤 FRESH JUICES & DRINKS
  {
    id: "pineapple_juice",
    categoryId: "juices_drinks",
    name: "Pineapple Juice (አናናስ)",
    price: 120,
    description: "Freshly squeezed tropical pineapple juice.",
  },
  {
    id: "avocado_juice",
    categoryId: "juices_drinks",
    name: "Avocado Juice (አቮካዶ)",
    price: 120,
    description: "Thick and creamy fresh avocado juice.",
  },
  {
    id: "papaya_juice",
    categoryId: "juices_drinks",
    name: "Papaya Juice (ፓፓዬ)",
    price: 110,
    description: "Sweet and refreshing fresh papaya juice.",
  },
  {
    id: "fruit_punch",
    categoryId: "juices_drinks",
    name: "Fruit Punch (Spris)",
    price: 140,
    description: "Layered mix of fresh seasonal fruit juices.",
  },
  {
    id: "ergo",
    categoryId: "juices_drinks",
    name: "Fresh Yogurt (እርጎ)",
    price: 90,
    description: "Chilled fresh house yogurt.",
  },
  {
    id: "soft_drink",
    categoryId: "juices_drinks",
    name: "Soft Drinks (ለስላሳ)",
    price: 50,
    description: "Chilled bottled sodas.",
  },

  // ☕ HOT DRINKS & COFFEE
  {
    id: "pesha_coffee",
    categoryId: "hot_drinks",
    name: "Pesha Special Coffee (ቡና)",
    price: 40,
    description: "Freshly roasted aromatic house coffee.",
  },
  {
    id: "tea",
    categoryId: "hot_drinks",
    name: "Spiced Tea (ሻይ)",
    price: 30,
    description: "Hot steeped tea infused with fresh spices.",
  },
  {
    id: "macchiato",
    categoryId: "hot_drinks",
    name: "Macchiato",
    price: 50,
    description: "Rich espresso topped with velvety steamed milk foam.",
  },
];