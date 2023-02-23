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
  const user = true;
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
