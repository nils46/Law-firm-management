import ContactCreate from "../../pages/crm/ContactCreate";

export default function ContactCreateModal({ setContacts, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card" style={{ width: "520px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Create Contact</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <ContactCreate
          setContacts={setContacts}  
          onClose={onClose}
        />
      </div>
    </div>
  );
}
