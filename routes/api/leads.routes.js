const express = require("express");
const router = express.Router();
const db = require("../../db/pool");

// CREATE LEAD
router.post("/api/leads", async (req, res) => {
  try {
    const {
      full_name,
      mobile,
      email,
      source,
      practice_area,
      city,
      state,
      preferred_contact,
      notes
    } = req.body;

    const result = await db.query(
      `INSERT INTO leads 
      (full_name, mobile, email, source, practice_area, city, state, preferred_contact, stage, notes)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'New',$9)
      RETURNING *`,
      [
        full_name,
        mobile,
        email,
        source,
        practice_area,
        city,
        state,
        preferred_contact,
        notes
      ]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Create lead failed" });
  }
});

// LIST LEADS
router.get("/api/leads", async (req, res) => {
  const result = await db.query(
    "SELECT * FROM leads ORDER BY created_at DESC"
  );
  res.json(result.rows);
});

// GET LEAD BY ID ✅ THIS WAS MISSING
router.get("/api/leads/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await db.query(
      "SELECT * FROM leads WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Fetch lead failed" });
  }
});
router.post("/api/leads/:id/convert", async (req, res) => {
  const { id } = req.params;

  // 1. Get lead
  const leadResult = await db.query(
    "SELECT * FROM leads WHERE id=$1",
    [id]
  );

  if (leadResult.rows.length === 0) {
    return res.status(404).json({ message: "Lead not found" });
  }

  const lead = leadResult.rows[0];

  // 2. Create contact
  await db.query(
    `INSERT INTO contacts
    (type, name, mobile, email, city, state, country)
    VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    [
      "person",
      lead.full_name,
      lead.mobile,
      lead.email,
      lead.city,
      lead.state,
      "India",
    ]
  );

  // 3. Update lead stage
  await db.query(
    "UPDATE leads SET stage='Converted' WHERE id=$1",
    [id]
  );

  res.json({ success: true });
});


module.exports = router;
