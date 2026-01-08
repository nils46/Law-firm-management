🚀 Law Firm Management System – Frontend

This repository contains the frontend implementation of the CRM Intake & Contacts module for the Law Firm Management System, inspired by Clio-style legal CRM workflows.

The frontend is built using React (Vite) and focuses on UI, forms, routing, validation, and local state management as part of the research and requirement analysis phase.


All data is managed using React state (dummy/local data) as instructed.

🧱 Tech Stack

React (Vite)

React Router DOM – routing & navigation

React Hook Form – form handling

Zod – schema-based form validation

CSS – Clio-style UI & layout

Local React State – dummy data handling

🧭 Available Routes
Route	Description
/crm/leads	Leads list with filters and actions
/crm/leads/:id	Lead details page
/contacts	Contacts list & create contact

Lead creation is handled via Quick Intake modal, not a separate route (Clio-style UX).

✨ Features Implemented
🔹 Leads (CRM Intake)

Lead creation via Quick Intake modal
Intake types:
New Person
New Company
Existing Contact (UI-only)

Lead list with:
Filters (Lead Type, Status)
Conditional actions (View / Edit)

Lead Details page:

Lead overview

Case / matter information

Activity timeline

Activity timeline:

Lead created

Follow-ups

Lead converted

Convert Lead:

Updates lead status

Logs activity

Automatically creates a contact (UI-only)

🔹 Contacts

Contacts list (Person / Company)

Manual Create Contact modal

Auto-created contacts on lead conversion

Form validations

Local state persistence during navigation

🎨 UI / UX Highlights

Clio-inspired layout and flows

Sticky right panel for activity & actions

Improved scrolling experience

Modal-based creation flows

Context-aware actions

Clean and consistent UI structure