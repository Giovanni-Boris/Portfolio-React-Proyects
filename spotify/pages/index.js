import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <main className="bg-black h-screen overflow-hidden">
        <Sidebar />
        {/* main content */}
      </main>
    </div>
  );
};

export default Home;
