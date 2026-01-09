document.addEventListener("DOMContentLoaded", async () => {
  const table = document.getElementById("contactsTable");

  try {
    const res = await fetch("/api/contacts");
    const contacts = await res.json();

    table.innerHTML = "";

    if (contacts.length === 0) {
      table.innerHTML = `
        <tr>
          <td colspan="4" class="text-center text-muted">
            No contacts found
          </td>
        </tr>
      `;
      return;
    }

    contacts.forEach(c => {
      table.innerHTML += `
        <tr>
          <td>${c.name}</td>
          <td>${c.mobile}</td>
          <td>${c.email || "-"}</td>
          <td>${c.type}</td>
        </tr>
      `;
    });
  } catch (err) {
    console.error("Failed to load contacts", err);
  }
});
