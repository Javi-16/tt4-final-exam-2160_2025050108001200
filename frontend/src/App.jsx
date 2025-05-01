import { useState, useEffect } from "react";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "./services/api";
import "./App.css";

function App() {
  const [applications, setApplications] = useState([]);
  const [editingApp, setEditingApp] = useState(null);

  const loadData = async () => {
    const data = await getApplications();
    setApplications(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = async (app) => {
    await createApplication(app);
    loadData();
  };

  const handleUpdate = async (app) => {
    await updateApplication(app.id, app);
    setEditingApp(null);
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteApplication(id);
    loadData();
  };

  const handleEdit = (app) => {
    setEditingApp(app);
  };

  return (
    <div className="container">
      <h1>Job Application Tracker</h1>
      <ApplicationForm
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        editingApp={editingApp}
      />
      <hr />
      <ApplicationList
        applications={applications}
        onDelete={handleDelete}
        onEdit={handleEdit}
        editingId={editingApp?.id}
      />
    </div>
  );
}

export default App;
