import React from "react";
import Write from "./write/Write";
import Settings from "./settings/Settings";
import { Routes, Route } from "react-router-dom";
const Dashboard = () => {
  return (
    <Routes>
      <Route path="/write" element={<Write />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Dashboard;
