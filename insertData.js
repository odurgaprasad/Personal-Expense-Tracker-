const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("transactions.db");

const categories = [
  { name: "Salary", type: "income" },
  { name: "Freelancing", type: "income" },
  { name: "Investments", type: "income" },
  { name: "Gifts", type: "income" },
  { name: "Side Hustles", type: "income" },
  { name: "Groceries", type: "expense" },
  { name: "Rent", type: "expense" },
  { name: "Utilities", type: "expense" },
  { name: "Transportation", type: "expense" },
  { name: "Dining Out", type: "expense" },
  { name: "Entertainment", type: "expense" },
  { name: "Health & Fitness", type: "expense" },
  { name: "Insurance", type: "expense" },
  { name: "Clothing", type: "expense" },
  { name: "Education", type: "expense" },
  { name: "Travel", type: "expense" },
  { name: "Subscriptions", type: "expense" },
  { name: "Home Improvement", type: "expense" },
  { name: "Pet Care", type: "expense" },
  { name: "Miscellaneous", type: "expense" },
  { name: "Savings", type: "income" },
  { name: "Bonuses", type: "income" },
  { name: "Refunds", type: "income" },
  { name: "Commission", type: "income" },
  { name: "Royalties", type: "income" },
  { name: "Child Support", type: "income" },
  { name: "Cash Gifts", type: "income" },
  { name: "Freelance Projects", type: "income" },
  { name: "Side Business", type: "income" },
  { name: "Side Income", type: "income" },
  { name: "Interest Income", type: "income" },
];

categories.forEach((category) => {
  db.run(`INSERT INTO categories (name, type) VALUES (?, ?)`, [
    category.name,
    category.type,
  ]);
});

const transactions = [
  {
    type: "income",
    category: 1,
    amount: 5000,
    date: "2024-10-21",
    description: "Monthly salary",
  },
  {
    type: "income",
    category: 2,
    amount: 1200,
    date: "2024-10-20",
    description: "Freelance work",
  },
  {
    type: "income",
    category: 3,
    amount: 300,
    date: "2024-10-19",
    description: "Investment returns",
  },
  {
    type: "income",
    category: 4,
    amount: 150,
    date: "2024-10-18",
    description: "Birthday gift",
  },
  {
    type: "income",
    category: 5,
    amount: 500,
    date: "2024-10-17",
    description: "Side hustle earnings",
  },
  {
    type: "expense",
    category: 6,
    amount: 200,
    date: "2024-10-15",
    description: "Weekly groceries",
  },
  {
    type: "expense",
    category: 7,
    amount: 1000,
    date: "2024-10-01",
    description: "Monthly rent",
  },
  {
    type: "expense",
    category: 8,
    amount: 150,
    date: "2024-10-14",
    description: "Utility bills",
  },
  {
    type: "expense",
    category: 9,
    amount: 80,
    date: "2024-10-13",
    description: "Transportation costs",
  },
  {
    type: "expense",
    category: 10,
    amount: 120,
    date: "2024-10-12",
    description: "Dining out",
  },
  {
    type: "expense",
    category: 11,
    amount: 90,
    date: "2024-10-11",
    description: "Movie night",
  },
  {
    type: "expense",
    category: 12,
    amount: 70,
    date: "2024-10-10",
    description: "Gym membership",
  },
  {
    type: "expense",
    category: 13,
    amount: 60,
    date: "2024-10-09",
    description: "Health insurance",
  },
  {
    type: "expense",
    category: 14,
    amount: 40,
    date: "2024-10-08",
    description: "New clothes",
  },
  {
    type: "expense",
    category: 15,
    amount: 300,
    date: "2024-10-07",
    description: "Course fees",
  },
  {
    type: "expense",
    category: 16,
    amount: 400,
    date: "2024-10-06",
    description: "Travel expenses",
  },
  {
    type: "expense",
    category: 17,
    amount: 50,
    date: "2024-10-05",
    description: "Subscription fees",
  },
  {
    type: "expense",
    category: 18,
    amount: 500,
    date: "2024-10-04",
    description: "Home renovation",
  },
  {
    type: "expense",
    category: 19,
    amount: 30,
    date: "2024-10-03",
    description: "Pet food",
  },
  {
    type: "expense",
    category: 20,
    amount: 20,
    date: "2024-10-02",
    description: "Miscellaneous",
  },
  {
    type: "income",
    category: 21,
    amount: 700,
    date: "2024-10-21",
    description: "Referral bonus",
  },
  {
    type: "income",
    category: 22,
    amount: 1000,
    date: "2024-10-20",
    description: "Project commission",
  },
  {
    type: "income",
    category: 23,
    amount: 450,
    date: "2024-10-19",
    description: "Royalties",
  },
  {
    type: "income",
    category: 24,
    amount: 600,
    date: "2024-10-18",
    description: "Cash gift",
  },
  {
    type: "income",
    category: 25,
    amount: 800,
    date: "2024-10-17",
    description: "Side business profits",
  },
  {
    type: "expense",
    category: 26,
    amount: 300,
    date: "2024-10-15",
    description: "Grocery shopping",
  },
  {
    type: "expense",
    category: 27,
    amount: 900,
    date: "2024-10-01",
    description: "Rent for the month",
  },
  {
    type: "expense",
    category: 28,
    amount: 120,
    date: "2024-10-14",
    description: "Car maintenance",
  },
  {
    type: "expense",
    category: 29,
    amount: 200,
    date: "2024-10-13",
    description: "Dinner",
  },
  {
    type: "expense",
    category: 30,
    amount: 60,
    date: "2024-10-12",
    description: "Clothes shopping",
  },
];

transactions.forEach((transaction) => {
  db.run(
    `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`,
    [
      transaction.type,
      transaction.category,
      transaction.amount,
      transaction.date,
      transaction.description,
    ]
  );
});

db.close((err) => {
  if (err) {
    console.error("Error closing database:", err.message);
  } else {
    console.log("Database connection closed.");
  }
});
