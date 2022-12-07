import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./layouts/Dashboard";
import './index.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <DashboardLayout>
            <Dashboard />
        </DashboardLayout>
    </React.StrictMode>
);
