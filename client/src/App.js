import "./index.css";

// components
import Navbar from "./components/navbar";
import Addtask from "./components/addtask";
import Tabs from "./components/tabs";

function App() {
  return <div className="bg-gradient-to-tl from-[#3C5E92] via-[#334471] to-[#2A2951] h-screen">
    <Navbar />
    <Addtask/>
    <Tabs/>

  </div>;
}

export default App;
