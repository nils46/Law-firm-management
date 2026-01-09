# CRM Intake & Contacts – Admin Panel (Task-2)

A CRM module built inside an Admin Panel template with full backend integration using Node.js, Express, and PostgreSQL.

This project implements **Lead management, Follow-ups, and Contacts** with real APIs and database persistence.

---

## 🚀 Tech Stack

**Frontend**
- EJS (Server-rendered UI)
- Bootstrap 5 (Admin Panel – Adminto Template)
- Vanilla JavaScript (Fetch API)

**Backend**
- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)

---

## 📌 Features Implemented (Task-2)

### Leads
- Create Lead
- List Leads
- View Lead Details
- Persisted in PostgreSQL
- Fields aligned with DB schema

### Follow-ups
- Add follow-up to a Lead
- View follow-up timeline
- Stored in `lead_followups` table
- Live UI update after submission

### Contacts
- Convert Lead → Contact
- Create Contact
- List Contacts
- Stored in PostgreSQL

---

## 🗄️ Database Schema

```sql
leads (
  id,
  full_name,
  mobile,
  email,
  source,
  practice_area,
  city,
  state,
  preferred_contact,
  stage,
  notes,
  created_at
)

lead_followups (
  id,
  lead_id,
  followup_datetime,
  next_action,
  comment
)

contacts (
  id,
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
)

🔌 API Endpoints
Leads

POST /api/leads

GET /api/leads

GET /api/leads/:id

Follow-ups

POST /api/leads/:id/followups

GET /api/leads/:id/followups

Contacts

POST /api/contacts

GET /api/contacts


⚙️ Setup Instructions
1️⃣ Install Dependencies
npm install

2️⃣ Environment Variables

Create config.env:

PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=post123
DB_NAME=crm_db
DB_PORT=5432

3️⃣ Start Server
node app.js


Server will run at:

http://localhost:3000