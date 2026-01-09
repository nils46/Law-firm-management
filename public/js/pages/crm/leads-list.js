document.addEventListener("DOMContentLoaded", async () => {
  const table = document.getElementById("leadsTable");

  try {
    const res = await fetch("/api/leads");
    const leads = await res.json();

    table.innerHTML = "";

    if (leads.length === 0) {
      table.innerHTML = `
        <tr>
          <td colspan="4" class="text-center text-muted">
            No leads found
          </td>
        </tr>`;
      return;
    }

    leads.forEach(l => {
      table.innerHTML += `
        <tr>
          <td>${l.full_name}</td>
          <td>${l.mobile}</td>
          <td>
            <span class="badge bg-${l.stage === "Converted" ? "success" : "primary"}">
              ${l.stage}
            </span>
          </td>
          <td>
            <a href="/crm/leads/${l.id}" class="btn btn-sm btn-outline-primary">
              View
            </a>
          </td>
        </tr>`;
    });
  } catch (err) {
    console.error("Failed to load leads", err);
  }
});
