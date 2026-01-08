import { useState } from "react";

export default function ConvertLeadModal({ onConvert, isConverted }) {
  const [open, setOpen] = useState(false);

  if (isConverted) {
    return (
      <p style={{ color: "#16a34a", fontWeight: 600 }}>
        ✔ Lead Converted
      </p>
    );
  }

  return (
    <>
      <button className="btn-primary" onClick={() => setOpen(true)}>
        Convert Lead
      </button>

      {open && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Convert Lead</h3>

            <p style={{ color: "#4b5563", marginTop: 8 }}>
              This action will convert this lead into a contact.
              You will no longer be able to edit the lead details.
            </p>

            <div className="modal-actions">
              <button
                className="btn-secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>

              <button
                className="btn-primary"
                onClick={() => {
                  onConvert();
                  setOpen(false);
                }}
              >
                Convert Lead
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
