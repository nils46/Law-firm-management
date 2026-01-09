const express = require("express");
const router = express.Router();
const leadController = require("../controllers/lead.controller");

// CREATE lead
router.post("/leads", leadController.createLead);

// LIST leads ✅ ADD THIS
router.get("/leads", leadController.getLeads);

module.exports = router;
