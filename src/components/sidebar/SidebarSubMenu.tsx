import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  MenuItems,
  MenuItemLinks,
} from "../../styled-components/sidebar/index";
import "../../styled-components/sidebar/style.css";

const SidebarSubMenu = ({
  setClose,
  route,
  isOpen,
  isMenuOpen,
  setIsMenuOpen,
}: any) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setClose(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <MenuItems>
            <MenuItemLinks
              to={route.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-sidebar active" : ""}`
              }
            >
              {route.icon}
              <span style={{ marginLeft: "16px" }}>{route.title}.</span>
            </MenuItemLinks>
          </MenuItems>
        </div>
      </div>
      {isMenuOpen && (
        <>
          {route.subRoutes.map((item: any, index: number) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks
                  to={item.path}
                  style={{ marginLeft: "37px" }}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-sidebar active" : ""}`
                  }
                >
                  {item.icon}
                  <span
                    style={{ marginLeft: "8px" }}
                    onClick={(e) => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </span>
                </MenuItemLinks>
              </MenuItems>
            );
          })}
        </>
      )}
    </>
  );
};

export default SidebarSubMenu;
