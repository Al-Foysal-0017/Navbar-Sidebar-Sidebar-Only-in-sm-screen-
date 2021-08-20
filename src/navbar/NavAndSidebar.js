import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "./NavAndSidebar.css"
import { navRoutes, navRoutesRight } from "./NavLinks";

const MobileNav = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  
  return (
    <header className="navbarAndSidebar">
      {/* NAVBAR PART */}
      <nav className="navbarContainer">
        <div className="navbarContainerWrapper">
          {/* LEFT NAVBAR */}
          <div className="navbarContainerLeft">
            <div className="navbarContainerHamburger">
              <Hamburger
                toggle={setOpenSidebar}
                toggled={openSidebar}
                color="#fff"
              />
            </div>
            <div className="navbarContainerLogo">
              <span className="">Logo</span>
            </div>
          </div>
          {/* RIGHT NAVBAR */}
          <div className="navbarContainerRightItems">
            {navRoutesRight.map((item) => (
              <div key={item.name} className="navbarContainerRightItem">
                <NavLink
                  className="link"
                  activeClassName="activeClassNameOfSidebar"
                  exact
                  to={item.route}
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* SIDEBAR PART */}
      <div
        className={`
                ${
                  openSidebar ? "translateForSidebar" : "translateForSidebarNeg"
                }
                setSidebarForToggle transform transition-all duration-300`}
      >
        <button
          className="SidebarToggleBtn"
          onClick={() => setOpenSidebar(false)}
        >
          X
        </button>
        <ul className="SidebarItems">
          {navRoutes.map((item) => (
            <li key={item.name} className="SidebarItem">
              <NavLink
                className="link"
                activeClassName="activeClassNameOfSidebar"
                exact
                to={item.route}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <h2 className="">Our categories</h2>
        <ul className="SidebarItems">
          {navRoutesRight.map((item) => (
            <li key={item.name} className="SidebarItem">
              <NavLink
                className="link"
                activeClassName="activeClassNameOfSidebar"
                exact
                to={item.route}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default MobileNav;
