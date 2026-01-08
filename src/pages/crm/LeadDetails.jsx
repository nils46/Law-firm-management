import { useParams } from "react-router-dom";
import AddFollowUp from "../../components/crm/AddFollowUp";
import ConvertLeadModal from "../../components/crm/ConvertLeadModal";

export default function LeadDetails({ leads, setLeads, setContacts }) {
  const { id } = useParams();

  const lead = leads.find((l) => String(l.id) === id);

  if (!lead) {
    return (
      <div className="page">
        <div className="card">Lead not found</div>
      </div>
    );
  }

  

  const handleAddFollowUp = (note) => {
    setLeads((prev) =>
      prev.map((l) =>
        l.id === lead.id
          ? {
              ...l,
              activities: [
                {
                  type: "followup",
                  text: `Follow-up added: ${note}`,
                  time: new Date().toLocaleString(),
                },
                ...(l.activities || []),
              ],
            }
          : l
      )
    );
  };

  const handleConvertLead = () => {
    setLeads((prev) =>
      prev.map((l) =>
        l.id === lead.id
          ? {
              ...l,
              status: "Converted",
              activities: [
                {
                  type: "convert",
                  text: "Lead converted to Contact",
                  time: new Date().toLocaleString(),
                },
                ...(l.activities || []),
              ],
            }
          : l
      )
    );

    
    setContacts((prev) => [
  ...prev,
  {
    id: Date.now(),
    name: lead.name || lead.companyName,
    type: lead.type || "Person", // ✅ FIX
    email: lead.email,
    phone: lead.phone,
  },
]);

  };

  

  return (
    <div className="page lead-details-layout">
      {/* LEFT COLUMN – INFO */}
      <div className="lead-left">
        {/* Lead Overview */}
        <div className="card">
          <h2>{lead.name || lead.companyName}</h2>

          <p>
            <strong>Type:</strong> {lead.type || "Person"}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span
              style={{
                color:
                  lead.status === "Converted" ? "#16a34a" : "#374151",
                fontWeight: 600,
              }}
            >
              {lead.status}
            </span>
          </p>

          <p>
            <strong>Email:</strong> {lead.email || "—"}
          </p>

          <p>
            <strong>Mobile:</strong> {lead.phone || "—"}
          </p>
        </div>

       
        <div className="card">
          <h3>Case / Matter Information</h3>

          <p>
            <strong>Practice Area:</strong>{" "}
            {lead.practiceArea || "—"}
          </p>

          <p>
            <strong>Lead Source:</strong>{" "}
            {lead.source || "—"}
          </p>

          <p>
            <strong>Notes:</strong>
          </p>
          <p style={{ color: "#4b5563" }}>
            {lead.notes || "No notes provided"}
          </p>
        </div>
      </div>

      
      <div className="lead-right">
        
        <div className="card">
          <h3>Activity</h3>

          <div className="timeline">
            {(lead.activities || []).map((a, i) => (
              <div key={i} className="timeline-item">
                <div className={`timeline-dot ${a.type}`} />

                <div className="timeline-content">
                  <div className="timeline-text">{a.text}</div>
                  <div className="timeline-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="card">
          <AddFollowUp onAdd={handleAddFollowUp} />

          <br />

          <ConvertLeadModal
            isConverted={lead.status === "Converted"}
            onConvert={handleConvertLead}
          />
        </div>
      </div>
    </div>
  );
}
