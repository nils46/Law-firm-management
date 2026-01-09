const express = require("express");
const router = express.Router();

/* =======================
   LEADS
======================= */

// LIST
router.get("/crm/leads", (req, res) => {
  res.render("crm/leads-list", { title: "Leads" });
});

// CREATE (must be before :id)
router.get("/crm/leads/new", (req, res) => {
  res.render("crm/lead-create", { lead: null });
});

// EDIT
router.get("/crm/leads/:id/edit", (req, res) => {
  res.render("crm/lead-create", {
    lead: { id: req.params.id },
  });
});

// DETAILS (last)
router.get("/crm/leads/:id", (req, res) => {
  res.render("crm/lead-details", {
    title: "Lead Details",
    leadId: req.params.id,
  });
});

/* =======================
   CONTACTS
======================= */

// LIST CONTACTS
router.get("/crm/contacts", (req, res) => {
  res.render("crm/contacts", { title: "Contacts" });
});

// CREATE CONTACT
router.get("/crm/contacts/new", (req, res) => {
  res.render("crm/contact-create", { title: "Create Contact" });
});

module.exports = router;
