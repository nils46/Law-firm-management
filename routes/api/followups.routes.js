const express = require("express");
const router = express.Router();
const pool = require("../../db/pool");

// ✅ CREATE FOLLOW-UP
router.post("/api/leads/:id/followups", async (req, res) => {
  try {
    const leadId = req.params.id;
    const { followup_datetime, next_action, comment } = req.body;

    await pool.query(
      `INSERT INTO lead_followups 
       (lead_id, followup_datetime, next_action, comment)
       VALUES ($1, $2, $3, $4)`,
      [leadId, followup_datetime, next_action, comment]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Follow-up insert failed:", err);
    res.status(500).json({ error: "Failed to add follow-up" });
  }
});

// ✅ FETCH FOLLOW-UPS
router.get("/api/leads/:id/followups", async (req, res) => {
  try {
    const leadId = req.params.id;

    const result = await pool.query(
      `SELECT *
       FROM lead_followups
       WHERE lead_id = $1
       ORDER BY followup_datetime DESC`,
      [leadId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("❌ Fetch followups failed:", err);
    res.status(500).json({ error: "Failed to fetch follow-ups" });
  }
});

module.exports = router;
