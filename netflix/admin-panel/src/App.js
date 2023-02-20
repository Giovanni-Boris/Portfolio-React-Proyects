import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Dashboard /> : <Navigate to="/dashboard/" />}
        />
        <Route
          path="/dashboard/*"
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
