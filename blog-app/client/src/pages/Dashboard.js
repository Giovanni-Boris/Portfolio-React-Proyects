import React from "react";
import Home from "./home/Home";
import Write from "./write/Write";
import Single from "./single/Single";
import Settings from "./settings/Settings";
import { Routes, Route } from "react-router-dom";
const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Dashboard;
