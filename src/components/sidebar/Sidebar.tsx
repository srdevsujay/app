import React, { FC } from "react";
import {
  ButtonLogout,
  MenuIconClose,
  MenuIconOpen,
  MenuItemLinks,
  MenuItems,
  SidebarMenu,
} from "../../styled-components";
import { useState } from "react";
import { SidebarData } from "./SidebarData";
import logo from "../../assets/images/logoRoalytics.png";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut } from "../../utilities/localstorage.utility";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appDispatch";
import { logoutUser } from "../../redux/state/slices/login/authSlice";
import { stateUser } from "../../utilities/stateUser.utilities";

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);

  const handleLogout = () => {
    signOut();
    navigate("/login");
    dispatch(logoutUser());
  };

  return (
    <SidebarMenu close={close}>
      <MenuIconClose to="#">
        <img src={close ? "" : logo} alt="" height="25" />
        <MenuIcon onClick={showSidebar} />
      </MenuIconClose>
      <div style={{ marginTop: "15px" }}>
        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
        {close === false ? (
          <ButtonLogout>
            <button className="btn handleLogout" onClick={handleLogout}>
              {/* <img src={edit} height="12" className="" /> */}
              Cerrar Sesión
            </button>
          </ButtonLogout>
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
