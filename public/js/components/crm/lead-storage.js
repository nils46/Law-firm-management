const LEAD_KEY = "crm_leads";

/**
 * Get all leads
 */
function getLeads() {
  return JSON.parse(localStorage.getItem(LEAD_KEY)) || [];
}

/**
 * Save all leads
 */
function saveLeads(leads) {
  localStorage.setItem(LEAD_KEY, JSON.stringify(leads));
}

/**
 * Add new lead
 */
function addLead(lead) {
  const leads = getLeads();

  // Ensure ID is always NUMBER
  lead.id = Number(lead.id);

  leads.push(lead);
  saveLeads(leads);
}

/**
 * Update existing lead (SAFE MERGE)
 */
function updateLead(updatedLead) {
  updatedLead.id = Number(updatedLead.id);

  const leads = getLeads().map(lead => {
    if (Number(lead.id) === updatedLead.id) {
      return {
        ...lead,        // keep old values
        ...updatedLead  // overwrite edited fields
      };
    }
    return lead;
  });

  saveLeads(leads);
}

/**
 * Get lead by ID (FIXED)
 */
function getLeadById(id) {
  return getLeads().find(
    lead => Number(lead.id) === Number(id)
  );
}
