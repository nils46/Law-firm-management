document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("leadsTable");
  const leads = getLeads();

  if (!table) return;

  if (leads.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="4" class="text-center text-muted">
          No leads created yet
        </td>
      </tr>
    `;
    return;
  }

  table.innerHTML = "";

  leads.forEach(lead => {
    table.innerHTML += `
      <tr>
        <td>${lead.full_name}</td>
        <td>${lead.mobile}</td>
        <td>
          <span class="badge bg-${lead.stage === "Converted" ? "success" : "primary"}">
            ${lead.stage}
          </span>
        </td>
        <td>
          <a href="/crm/leads/${lead.id}" class="btn btn-sm btn-outline-primary">
            View
          </a>
        </td>
      </tr>
    `;
  });
});
