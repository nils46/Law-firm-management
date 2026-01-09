document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to save contact");

    alert("Contact saved");
    window.location.href = "/crm/contacts";
  } catch (err) {
    alert("Error saving contact");
    console.error(err);
  }
});

});
