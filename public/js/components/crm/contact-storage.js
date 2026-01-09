const CONTACT_KEY = "crm_contacts";

function getContacts() {
  return JSON.parse(localStorage.getItem(CONTACT_KEY)) || [];
}

function saveContacts(contacts) {
  localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
}

function addContact(contact) {
  const contacts = getContacts();
  contacts.push(contact);
  saveContacts(contacts);
}
