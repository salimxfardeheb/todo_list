import "./index.css";

// components
import Navbar from "./components/navbar";

function App() {
  return <div className="flex justify-center bg-bgimg h-screen bg-cover">
    <div className="border h-fit border-blue-950 bg-blue-900 bg-opacity-70">
    <Navbar />
    </div>
  </div>;
}

export default App;
