import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../redux/store";
import { publicRoutes } from "../models/routes";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.user !== null ? (
    <Outlet />
  ) : (
    <Navigate replace to={publicRoutes.LOGIN} />
  );
};

export default AuthGuard;
