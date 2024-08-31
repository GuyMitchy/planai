const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const pool = new Pool(require('./config/config.json').development);

const validateInput = (username, password) => {
};

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      validateInput(username, password);
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query('INSERT INTO users (username, password) VALUES (, ) RETURNING *', [username, hashedPassword]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      validateInput(username, password);
      const result = await pool.query('SELECT * FROM users WHERE username = ', [username]);
      const user = result.rows[0];
      if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
