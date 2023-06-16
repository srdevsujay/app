import React, { FC, useContext, useEffect } from "react";
import {
  MenuIconClose,
  MenuIconOpen,
  MenuItemLinks,
  MenuItems,
  SidebarMenu,
} from "../../styled-components/sidebar";
import { useState } from "react";
import { SidebarData, SidebarDataStatusCancel } from "./SidebarData";
import logo from "../../assets/images/logoRoalytics.png";
import logoWhite from "../../assets/images/LogoRoalyticsWhite.png";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut } from "../../utilities/localstorage.utility";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/appDispatch";
import { logoutUser } from "../../redux/state/slices/login/authSlice";
import { stateUser } from "../../utilities/stateUser.utilities";
import { ButtonLogout, ButtonTheme } from "../../styled-components/button";
import SidebarSubMenu from "./SidebarSubMenu";
import { toggleSlider } from "../../redux/state/slices/dashboard/dashboardThunk";
// import useThemeMode from "../../hooks/useThemeMode";
import styled from "styled-components";
import { SidebarItem } from "../../models/sidebar.model";
import Toggle from "../../utilities/theme/ToggleButton";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

// const ToggleContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-bottom: 1rem;
// `;

// const ToggleInput = styled.input`
//   opacity: 0;
//   width: 0;
//   height: 0;

//   &:checked + span {
//     background-color: #2196f3; /* Color de fondo cuando está activado */
//   }

//   &:focus + span {
//     box-shadow: 0 0 1px #2196f3;
//   }

//   &:checked + span:before {
//     transform: translateX(26px);
//   }
// `;

// const ToggleLabel = styled.label`
//   position: relative;
//   display: inline-block;
//   width: 60px;
//   height: 34px;
// `;

const Sidebar: FC = () => {
  const usersub = useAppSelector((state) => state.user?.user);
  const subscriptionUser = useAppSelector(
    (state) => state.configuration?.subscriptionUser
  );

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  // console.log("statusUser", usersub.usersub.length);
  // console.log("subscriptionUser", Object.keys(subscriptionUser).length);
  // const [toggleTheme] = useThemeMode() as any;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [close, setClose] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showSidebar = () => setClose(!close);

  const handleLogout = () => {
    signOut();
    navigate("/login");
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(toggleSlider(close));
  }, [close]);

  const [handleSlider, setHandleSlider] = useState<SidebarItem[]>([]);

  useEffect(() => {
    if (
      usersub?.usersub.length !== 0 ||
      Object.keys(subscriptionUser).length !== 0 ||
      usersub.user_type === 1
    ) {
      console.log("entra al aaray 0 sideBar");
      setHandleSlider(SidebarData);

      // if (usersub === "canceled") {
      //   console.log("Status Cancel");
      // } else {
      // }
    } else {
      console.log("entra al aaray + sideBar");
      setHandleSlider(SidebarDataStatusCancel);
    }
  }, [usersub, subscriptionUser]);

  console.log("SidebarDataStatusCancel", SidebarDataStatusCancel);
  const { theme, themeSliderText } = useContext(ThemeContext);
  const [activeItem, setActiveItem] = useState("");
  return (
    <SidebarMenu close={close} theme={theme}>
      <MenuIconClose to="#">
        {themeState === true || themeState === "true" ? (
          <img src={close ? logoWhite : ""} alt="" height="25" />
        ) : (
          <img src={close ? logo : ""} alt="" height="25" />
        )}
        <MenuIcon onClick={showSidebar} />
      </MenuIconClose>
      <div style={{ marginTop: "15px" }}>
        {handleSlider.map((item, index) => {
          const isActive = activeItem === item.path;
          {
            /* {SidebarData.map((item, index) => { */
          }
          if (item.subRoutes) {
            return (
              <SidebarSubMenu
                setClose={setClose}
                route={item}
                close={close}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            );
          }
          return (
            <MenuItems key={index}>
              <MenuItemLinks
                to={item.path}
                className={isActive ? "activeSlider" : ""}
              >
                {item.icon}
                <span
                  style={{ marginLeft: "16px" }}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    setActiveItem(item.path);
                  }}
                >
                  {close ? item.title : ""}
                </span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
        {close === true ? (
          <>
            {/* <div
              style={{ backgroundColor: theme.background, color: theme.text }}
            >
              <button onClick={toggleTheme}>Toggle</button>
            </div> */}
            <div className="d-flex">
              <ButtonTheme>
                <Toggle />
              </ButtonTheme>
              <ButtonLogout theme={theme}>
                <button className="btn handleLogout" onClick={handleLogout}>
                  {/* <img src={edit} height="12" className="" /> */}
                  Cerrar Sesión
                </button>
              </ButtonLogout>
            </div>
          </>
        ) : (
          <div className="dropMenu-logout" style={{ width: "43px" }}>
            {/* <LogoutIcon
                sx={{ fontSize: "9rem" }}
                onClick={handleLogout}
              /> */}
          </div>
        )}
      </div>
    </SidebarMenu>
  );
};

export default Sidebar;
