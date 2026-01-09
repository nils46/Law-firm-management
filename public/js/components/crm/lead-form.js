document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const lead = {
      id: Date.now(),
      full_name: formData.get("full_name"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      source: "Manual",
      practice_area: formData.get("practice_area"),
      city: formData.get("city"),
      state: formData.get("state"),
      preferred_contact: "Mobile",
      stage: "New",
      notes: formData.get("notes"),
      created_at: new Date().toISOString()
    };

    addLead(lead);

    // ✅ Redirect after save
    window.location.href = "/crm/leads";
  });
});
