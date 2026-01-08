import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside
      style={{
        width: "220px",
        height: "100vh",
        background: "#ffffff",
        borderRight: "1px solid #e5e7eb",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>CRM</h3>

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "12px" }}>
            <Link
              to="/crm/leads"
              style={{
                textDecoration: "none",
                color: isActive("/crm/leads") ? "#2563eb" : "#374151",
                fontWeight: isActive("/crm/leads") ? "600" : "400",
              }}
            >
              Leads
            </Link>
          </li>

          <li>
            <Link
              to="/contacts"
              style={{
                textDecoration: "none",
                color: isActive("/contacts") ? "#2563eb" : "#374151",
                fontWeight: isActive("/contacts") ? "600" : "400",
              }}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
