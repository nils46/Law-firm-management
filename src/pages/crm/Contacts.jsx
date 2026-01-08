import { useState } from "react";
import ContactCreateModal from "../../components/crm/ContactCreateModal";

export default function Contacts({ contacts, setContacts }) {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="page">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Contacts</h2>

          <button
            className="btn-primary"
            onClick={() => setShowCreate(true)}
          >
            Create Contact
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="4">No contacts yet</td>
              </tr>
            ) : (
              contacts.map((c) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.type}</td>
                  <td>{c.email || "—"}</td>
                  <td>{c.phone || "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showCreate && (
        <ContactCreateModal
          setContacts={setContacts} 
          onClose={() => setShowCreate(false)}
        />
      )}
    </div>
  );
}
