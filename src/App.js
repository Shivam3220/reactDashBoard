import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Expense from "./pages/Expense";
import Income from "./pages/Income";
import BugetExpense from "./pages/BugetExpense";
import BugetIncome from "./pages/BugetIncome";
import UserExpenseChart from "./pages/UserExpenseChart";
import { useSelector, useDispatch } from 'react-redux'
import { userLoggingIn} from './ReduxActions/UserLogged'

function App() {
  const [ToggleSideBar, setToggleSideBar] = useState(true);
  const checkLogged = useSelector((state) => state.user.Logged)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(!checkLogged){
      console.log(checkLogged)
      navigate("/login")
    }
  }, [checkLogged])

  useEffect(() => {
    const a =localStorage.getItem("user")
    if(a){
      dispatch(userLoggingIn(JSON.parse(a)))
      navigate("/")
    }
  }, [])
  

  return (
    <>


        <Routes>
          <Route path="/" element={<><div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <Navbar
                setToggleSideBar={setToggleSideBar}
                ToggleSideBar={ToggleSideBar}
              />
            </div>
          </div>
            <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
              <SideBar ToggleSideBar={ToggleSideBar} /><Home /> </div></>} />

          <Route path="/expense" element={<><div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <Navbar
                setToggleSideBar={setToggleSideBar}
                ToggleSideBar={ToggleSideBar}
              />
            </div>
          </div>
            <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
              <SideBar ToggleSideBar={ToggleSideBar} /><Expense /> </div></>} />
          <Route path="/income" element={<><div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <Navbar
                setToggleSideBar={setToggleSideBar}
                ToggleSideBar={ToggleSideBar}
              />
            </div>
          </div>
            <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
              <SideBar ToggleSideBar={ToggleSideBar} /><Income /> </div></>} />

          <Route path="/buget-expense" element={<><div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <Navbar
                setToggleSideBar={setToggleSideBar}
                ToggleSideBar={ToggleSideBar}
              />
            </div>
          </div>
            <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
              <SideBar ToggleSideBar={ToggleSideBar} /><BugetExpense /> </div></>} />

          <Route path="/buget-Income" element={<><div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <Navbar
                setToggleSideBar={setToggleSideBar}
                ToggleSideBar={ToggleSideBar}
              />
            </div>
          </div>
            <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
              <SideBar ToggleSideBar={ToggleSideBar} /><BugetIncome /> </div></>} />

          <Route path="/charts" element={<><div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <Navbar
                setToggleSideBar={setToggleSideBar}
                ToggleSideBar={ToggleSideBar}
              />
            </div>
          </div>
            <div className={`${ToggleSideBar ? "d-flex " : "d-block "}`}>
              <SideBar ToggleSideBar={ToggleSideBar} /><UserExpenseChart /> </div></>} />

          <Route path="/login" element={<><Login /></>} />

          <Route path="/register" element={<><Register /></>} />

        </Routes>

    </>
  );
}

export default App;
