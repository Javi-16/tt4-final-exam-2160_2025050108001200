const API_BASE = "https://localhost:7259/api/applications";

export async function getApplications() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function createApplication(app) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(app),
  });
  return res.json();
}

export async function updateApplication(id, app) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(app),
  });
  return res;
}

export async function deleteApplication(id) {
  await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
}
