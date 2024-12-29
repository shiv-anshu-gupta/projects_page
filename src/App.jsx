// src/App.jsx
import Breadcrumb from "./components/Breadcrumb";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Breadcrumb />
      <Projects />
    </div>
  );
};

export default App;
