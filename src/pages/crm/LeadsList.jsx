import { useState } from "react";
import { Link } from "react-router-dom";
import LeadIntakeModal from "../../components/crm/LeadIntakeModal";

export default function LeadsList({ leads, setLeads }) {
  const [showIntake, setShowIntake] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  // 🔹 Filters
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const closeModal = () => {
    setShowIntake(false);
    setEditingLead(null);
  };

  
  const filteredLeads = leads.filter((l) => {
    const leadType = l.type || "Person";

    const typeMatch =
      typeFilter === "All" || leadType === typeFilter;

    const statusMatch =
      statusFilter === "All" || l.status === statusFilter;

    return typeMatch && statusMatch;
  });

  return (
    <div className="page">
      <div className="card">
       
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Leads</h2>

          <button
            className="btn-primary"
            onClick={() => setShowIntake(true)}
          >
            Quick Intake
          </button>
        </div>

        
        <div
          style={{
            display: "flex",
            gap: 12,
            margin: "12px 0",
            alignItems: "center",
          }}
        >
          <div>
            <label style={{ fontSize: 12 }}>Lead Type</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Person">Person</option>
              <option value="Company">Company</option>
              <option value="Existing Contact">
                Existing Contact
              </option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: 12 }}>Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="New">New</option>
              <option value="Converted">Converted</option>
            </select>
          </div>
        </div>

        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lead Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan="4">
                  No leads match the selected filters
                </td>
              </tr>
            ) : (
              filteredLeads.map((l) => (
                <tr key={l.id}>
                  <td>{l.name || l.companyName || "—"}</td>
                  <td>{l.type || "Person"}</td>
                  <td>
                    <span
                      style={{
                        color:
                          l.status === "Converted"
                            ? "green"
                            : "#374151",
                        fontWeight: 500,
                      }}
                    >
                      {l.status}
                    </span>
                  </td>
                  <td>
                    {/* View */}
                    <Link to={`/crm/leads/${l.id}`}>View</Link>

                   
                    {l.status !== "Converted" &&
                      l.type !== "Existing Contact" && (
                        <button
                          className="btn-secondary"
                          style={{ marginLeft: 8 }}
                          onClick={() => {
                            setEditingLead(l);
                            setShowIntake(true);
                          }}
                        >
                          Edit
                        </button>
                      )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      
      {showIntake && (
        <LeadIntakeModal
          setLeads={setLeads}
          editingLead={editingLead}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
