import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const leadSchema = z.object({
  name: z.string().optional(),
  companyName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  source: z.string().min(1, "Lead source is required"),
  practiceArea: z.string().min(1, "Practice area is required"),
  notes: z.string().optional(),
});

export default function LeadCreate({
  setLeads,
  onClose,
  editingLead,
  intakeType = "person", // person | company | existing
}) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: editingLead || {},
  });

  
  useEffect(() => {
    if (editingLead) {
      reset(editingLead);
    } else {
      reset({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        source: "",
        practiceArea: "",
        notes: "",
      });
    }
  }, [editingLead, intakeType, reset]);

  const onSubmit = (data) => {
  const leadType =
    intakeType === "company"
      ? "Company"
      : intakeType === "existing"
      ? "Existing Contact"
      : "Person";

  if (editingLead) {
    // UPDATE existing lead
    setLeads((prev) =>
      prev.map((l) =>
        l.id === editingLead.id
          ? {
              ...l,
              ...data,
              type: leadType, // ✅ FIX
            }
          : l
      )
    );
  } else {
    // CREATE new lead
    setLeads((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...data,
        type: leadType, // ✅ FIX
        status: "New",
        activities: [
          {
            type: "create",
            text: "Lead created",
            time: new Date().toLocaleString(),
          },
        ],
      },
    ]);
  }

  if (onClose) onClose();
  else navigate("/crm/leads");
};


  return (
    <div className="page">
      <div className="card">
        <h2>
          {editingLead
            ? "Edit Lead"
            : intakeType === "company"
            ? "New Company Intake"
            : intakeType === "existing"
            ? "Existing Contact Intake"
            : "New Person Intake"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Existing Contact (UI only) */}
          {intakeType === "existing" && (
            <div style={{ marginBottom: 12 }}>
              <label>Select Existing Contact</label>
              <select>
                <option value="">Select contact</option>
                <option>Rahul Sharma</option>
                <option>Anita Desai</option>
                <option>ABC Pvt Ltd</option>
              </select>

              <p style={{ fontSize: 12, color: "#6b7280" }}>
                UI only – contact search will be integrated later
              </p>
            </div>
          )}

          
          {intakeType !== "existing" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              
              {intakeType === "company" && (
                <div>
                  <label>Company Name</label>
                  <input {...register("companyName")} />
                </div>
              )}

              
              <div>
                <label>Full Name</label>
                <input {...register("name")} />
              </div>

              <div>
                <label>Email</label>
                <input type="email" {...register("email")} />
              </div>

              <div>
                <label>Mobile Number</label>
                <input {...register("phone")} />
              </div>

              <div>
                <label>Lead Source</label>
                <select {...register("source")}>
                  <option value="">Select source</option>
                  <option value="Website">Website</option>
                  <option value="Referral">Referral</option>
                  <option value="Phone Call">Phone Call</option>
                </select>
                <p className="error">{errors.source?.message}</p>
              </div>

              <div>
                <label>Practice Area</label>
                <select {...register("practiceArea")}>
                  <option value="">Select practice area</option>
                  <option value="Civil">Civil</option>
                  <option value="Criminal">Criminal</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Family">Family</option>
                </select>
                <p className="error">
                  {errors.practiceArea?.message}
                </p>
              </div>
            </div>
          )}

          
          <div style={{ marginTop: 12 }}>
            <label>Notes</label>
            <textarea
              {...register("notes")}
              rows={4}
              placeholder="Add any additional details about the lead..."
              style={{ resize: "vertical" }}
            />
          </div>

          
          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 8,
            }}
          >
            {onClose && (
              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            )}

            <button type="submit" className="btn-primary">
              {editingLead ? "Update Lead" : "Save Lead"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
