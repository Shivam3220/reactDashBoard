import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"; 
import SideBar from "./components/SideBar"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [ToggleSideBar, setToggleSideBar] = useState(true);

  return (
    <>
      <Router>
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <Navbar
              setToggleSideBar={setToggleSideBar}
              ToggleSideBar={ToggleSideBar}
            />
          </div>
        </div>
        <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
          <SideBar ToggleSideBar={ToggleSideBar} />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<><Login /></>}/>
              <Route path="/register" element={<><Register/></>}/>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
