import React from "react";
import { RiDashboard3Line } from 'react-icons/ri';
import { BsLayoutSplit ,BsBook } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import {FaChartBar, FaTable } from 'react-icons/fa'
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const ToggleSideBar = props.ToggleSideBar;
  return (
    <div
      id="layoutSidenav_nav"
      className={`${ToggleSideBar ? "d-block" : "d-none"} `}
      style={{ width: "255px", height: `${window.location.pathname==="/staticNav"?"":"91vh"}`}}
    >
      <nav
        className={`sb-sidenav accordion ${window.location.pathname==="/lightStatic"?"sb-sidenav-light":"sb-sidenav-dark"}`}
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="/">
              <div className="sb-nav-link-icon">
                <RiDashboard3Line/>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <button
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
              style={{"background":"#212529"}}
            >
              <div className="sb-nav-link-icon">
                <BsLayoutSplit/>
              </div>
              Transactions
              <div className="sb-sidenav-collapse-arrow">
               <IoIosArrowDown/>
              </div>
            </button>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link" href="/staticNav">
                  Expense
                </a>
                <a className="nav-link" href="/lightStatic">
                  Income
                </a>
              </nav>
            </div>
            <button
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts1"
              aria-expanded="false"
              aria-controls="collapseLayouts1"
              style={{"background":"#212529"}}
            >
              <div className="sb-nav-link-icon">
                <BsLayoutSplit/>
              </div>
              Buget
              <div className="sb-sidenav-collapse-arrow">
               <IoIosArrowDown/>
              </div>
            </button>
            <div
              className="collapse"
              id="collapseLayouts1"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link" href="/staticNav">
                  Expense
                </a>
                <a className="nav-link" href="/lightStatic">
                  Income
                </a>
              </nav>
            </div>
            
            <div className="sb-sidenav-menu-heading">Addons</div>
            <a className="nav-link" href="/charts">
              <div className="sb-nav-link-icon">
                <FaChartBar/>
              </div>
              Charts
            </a>
            
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          User Name
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
