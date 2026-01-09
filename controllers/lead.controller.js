const pool = require("../db/pool");

exports.createLead = async (req, res) => {
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
      notes,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO leads 
      (full_name, mobile, email, source, practice_area, city, state, preferred_contact, notes)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
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
        notes,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create lead" });
  }
};
exports.getLeads = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM leads ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
};

