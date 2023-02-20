import Home from "./home/Home";
import Watch from "./watch/Watch";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Home type="movies" />} />
      <Route path="/series" element={<Home type="series" />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
};

export default Dashboard;
