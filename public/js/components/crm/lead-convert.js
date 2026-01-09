document.addEventListener("DOMContentLoaded", () => {
  const convertBtn = document.getElementById("convertLead");
  if (!convertBtn) return;

  convertBtn.addEventListener("click", async () => {
    const leadId = document.getElementById("leadId").value;

    try {
      const res = await fetch(`/api/leads/${leadId}/convert`, {
        method: "POST"
      });

      if (!res.ok) {
        alert("Conversion failed");
        return;
      }

      alert("Lead converted to Contact");
      window.location.href = "/crm/contacts";

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  });
});
