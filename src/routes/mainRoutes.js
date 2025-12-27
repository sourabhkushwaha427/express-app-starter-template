const express = require("express");
const router = express.Router();
const pool = require("../configs/db"); // <-- DB imported

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Fetch all users from DB
 *     responses:
 *       200:
 *         description: User List
 *       500:
 *         description: DB Error
 */
router.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users;"); // example table
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
