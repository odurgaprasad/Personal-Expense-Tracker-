const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbPath = path.join(__dirname, "transactions.db");
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3636, () => {
      console.log("Server started at http://localhost:3636");
    });
  } catch (err) {
    console.error(`DB Error: ${err.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.post("/transactions", async (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sqlQuery = `INSERT INTO transactions (type, category, amount, date, description) 
                    VALUES ('${type}', '${category}', ${amount}, '${date}', '${description}')`;
  try {
    const data = await db.run(sqlQuery);
    res.status(201).send({ id: data.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/transactions", async (req, res) => {
  const sqlQuery = `SELECT * FROM transactions`;
  try {
    const rows = await db.all(sqlQuery);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const sqlQuery = `SELECT * FROM transactions WHERE id = ${id}`;
  try {
    const row = await db.get(sqlQuery);
    if (!row) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;
  const sqlQuery = `UPDATE transactions 
                    SET type = '${type}', category = '${category}', amount = ${amount}, date = '${date}', description = '${description}' 
                    WHERE id = ${id}`;
  try {
    const { changes } = await db.run(sqlQuery);
    if (changes === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.json({ message: "Transaction updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const sqlQuery = `DELETE FROM transactions WHERE id = ${id}`;
  try {
    const { changes } = await db.run(sqlQuery);
    if (changes === 0) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.json({ message: "Transaction deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/summary", async (req, res) => {
  const sqlQuery = `SELECT 
                    SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS totalIncome,
                    SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS totalExpenses
                    FROM transactions`;
  try {
    const rows = await db.all(sqlQuery);
    const summary = {
      totalIncome: rows[0].totalIncome || 0,
      totalExpenses: rows[0].totalExpenses || 0,
      balance: (rows[0].totalIncome || 0) - (rows[0].totalExpenses || 0),
    };
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
