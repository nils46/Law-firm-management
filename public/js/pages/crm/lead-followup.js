document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("followupForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const leadId = document.getElementById("leadId").value;

    const payload = {
      followup_datetime: form.followup_datetime.value,
      next_action: form.next_action.value,
      comment: form.comment.value
    };

    const res = await fetch(`/api/leads/${leadId}/followups`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      form.reset();
      loadFollowups(); // 🔥 REFRESH TIMELINE
    } else {
      alert("Failed to add follow-up");
    }
  });
});
