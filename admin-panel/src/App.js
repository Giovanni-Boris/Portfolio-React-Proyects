import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="others">Other</div>
      </div>
    </div>
  );
}

export default App;
