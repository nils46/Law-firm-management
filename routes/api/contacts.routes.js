const express = require("express");
const router = express.Router();

// ✅ IMPORT DB POOL (THIS WAS MISSING)
const pool = require("../../db/pool");

// CREATE CONTACT
router.post("/api/contacts", async (req, res) => {
  try {
    const {
      type,
      name,
      mobile,
      email,
      address1,
      address2,
      city,
      state,
      country,
      pincode,
      tags_json
    } = req.body;

    const result = await pool.query(
      `INSERT INTO contacts
      (type, name, mobile, email, address1, address2, city, state, country, pincode, tags_json)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
      RETURNING *`,
      [
        type,
        name,
        mobile,
        email,
        address1,
        address2,
        city,
        state,
        country,
        pincode,
        JSON.stringify(tags_json || [])
      ]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ Contact save failed:", err);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

// LIST CONTACTS
router.get("/api/contacts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Fetch contacts failed:", err);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

module.exports = router;
