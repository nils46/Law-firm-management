import LeadCreate from "../../pages/crm/LeadCreate";
import { useState } from "react";


export default function LeadIntakeModal({ setLeads, onClose, editingLead }) {
  const [intakeType, setIntakeType] = useState("person"); // person | company | existing

  return (
    <div className="modal-overlay">
      <div className="modal-card" style={{ width: "720px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>
            {editingLead
              ? "Edit Lead"
              : intakeType === "company"
              ? "New Company Intake"
              : intakeType === "existing"
              ? "Existing Contact Intake"
              : "Quick Intake"}
          </h3>
          <button onClick={onClose}>✕</button>
        </div>

        
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button
            className={intakeType === "person" ? "btn-primary" : "btn-secondary"}
            onClick={() => setIntakeType("person")}
          >
            New Person
          </button>

          <button
            className={intakeType === "company" ? "btn-primary" : "btn-secondary"}
            onClick={() => setIntakeType("company")}
          >
            New Company
          </button>

          <button
            className={intakeType === "existing" ? "btn-primary" : "btn-secondary"}
            onClick={() => setIntakeType("existing")}
          >
            Existing Contact
          </button>
        </div>

        
        <LeadCreate
          setLeads={setLeads}
          onClose={onClose}
          editingLead={editingLead}
          intakeType={intakeType}
        />
      </div>
    </div>
  );
}

