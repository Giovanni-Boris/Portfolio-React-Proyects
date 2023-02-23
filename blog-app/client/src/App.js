import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  const user =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmY2MTBhMDIzMzZlYjhhYTI2ZTVmOCIsImlhdCI6MTY3NzE2ODc4NSwiZXhwIjoxNjc3NjAwNzg1fQ.D16KbAMXPzQgz-m6Rl2nqcmpKTmma8_cVAXwt9EhP6E";
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/main" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/main" /> : <Register />}
        />
        <Route
          path="/main/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
