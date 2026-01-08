import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [leads, setLeads] = useState([]);
  const [contacts, setContacts] = useState([]); // ✅ NEW

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <AppRoutes
            leads={leads}
            setLeads={setLeads}
            contacts={contacts}
            setContacts={setContacts}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
