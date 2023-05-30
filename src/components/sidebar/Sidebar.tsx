import React, { FC, useEffect } from "react";
import {
  MenuIconClose,
  MenuIconOpen,
  MenuItemLinks,
  MenuItems,
  SidebarMenu,
} from "../../styled-components/sidebar";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import logo from "../../assets/images/logoRoalytics.png";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut } from "../../utilities/localstorage.utility";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appDispatch";
import { logoutUser } from "../../redux/state/slices/login/authSlice";
import { stateUser } from "../../utilities/stateUser.utilities";
import { ButtonLogout } from "../../styled-components/button";
import SidebarSubMenu from "./SidebarSubMenu";
import { toggleSlider } from "../../redux/state/slices/dashboard/dashboardThunk";
import useThemeMode from "../../hooks/useThemeMode";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #2196f3; /* Color de fondo cuando está activado */
  }

  &:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Sidebar: FC = () => {
  const [toggleTheme] = useThemeMode() as any;
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

  return (
    <SidebarMenu close={close}>
      <MenuIconClose to="#">
        <img src={close ? logo : ""} alt="" height="25" />
        <MenuIcon onClick={showSidebar} />
      </MenuIconClose>
      <div style={{ marginTop: "15px" }}>
        {SidebarData.map((item, index) => {
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
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span
                  style={{ marginLeft: "16px" }}
                  onClick={(e) => setIsMenuOpen(false)}
                >
                  {close ? item.title : ""}
                </span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
        {close === true ? (
          <>
            {/* <ToggleContainer>
              <ToggleLabel>
                <ToggleInput
                  type="checkbox"
                  // checked={checked}
                  // onChange={onChange}
                />
              </ToggleLabel>
            </ToggleContainer> */}
            <ButtonLogout>
              <button className="btn handleLogout" onClick={handleLogout}>
                {/* <img src={edit} height="12" className="" /> */}
                Cerrar Sesión
              </button>
            </ButtonLogout>
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
