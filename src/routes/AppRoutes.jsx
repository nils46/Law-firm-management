import { Routes, Route } from "react-router-dom";
import LeadsList from "../pages/crm/LeadsList";
import LeadDetails from "../pages/crm/LeadDetails";
import Contacts from "../pages/crm/Contacts";

export default function AppRoutes({
  leads,
  setLeads,
  contacts,
  setContacts,
}) {
  return (
    <Routes>
      <Route
        path="/crm/leads"
        element={
          <LeadsList
            leads={leads}
            setLeads={setLeads}
          />
        }
      />

      <Route
        path="/crm/leads/:id"
        element={
          <LeadDetails
            leads={leads}
            setLeads={setLeads}
            setContacts={setContacts}
          />
        }
      />

     
      <Route
        path="/contacts"
        element={
          <Contacts
            contacts={contacts}
            setContacts={setContacts}
          />
        }
      />
    </Routes>
  );
}
