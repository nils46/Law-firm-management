document.addEventListener("DOMContentLoaded", async () => {
  const leadId = document.getElementById("leadId").value;
  if (!leadId) return;

  try {
    const res = await fetch(`/api/leads/${leadId}`);
    const lead = await res.json();

    document.getElementById("leadName").innerText = lead.full_name;
    document.getElementById("leadStage").innerText = lead.stage;
    document.getElementById("leadMobile").innerText = lead.mobile;
    document.getElementById("leadEmail").innerText = lead.email || "-";
    document.getElementById("leadPractice").innerText = lead.practice_area;
    document.getElementById("leadNotes").innerText = lead.notes || "-";
  } catch (err) {
    console.error("Failed to load lead", err);
  }
});
async function loadFollowups() {
  const leadId = document.getElementById("leadId").value;
  const list = document.getElementById("followupList");

  if (!leadId || !list) return;

  const res = await fetch(`/api/leads/${leadId}/followups`);
  const followups = await res.json();

  list.innerHTML = "";

  if (followups.length === 0) {
    list.innerHTML = `
      <li class="list-group-item text-muted">
        No follow-ups yet
      </li>
    `;
    return;
  }

  followups.forEach(f => {
    list.innerHTML += `
      <li class="list-group-item">
        <strong>${new Date(f.followup_datetime).toLocaleString()}</strong><br>
        <span class="badge bg-info">${f.next_action}</span>
        <p class="mb-0 mt-1">${f.comment || ""}</p>
      </li>
    `;
  });
}

document.addEventListener("DOMContentLoaded", loadFollowups);
