import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CreateAccount from "./pages/Register/CreateAccount";
import AuthGuard from "./guards/auth.guard";
import { publicRoutes, privateRoutes } from "./models/routes";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound.utility";
import { Sidebar } from "./components/sidebar";
import { useAppSelector } from "./hooks";
import { useSelector } from "react-redux";
import { AppStore } from "./redux/store";

const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Lead = lazy(() => import("./pages/Lead/Lead"));
const Register = lazy(() => import("./pages/Register/CreateAccount"));

function App() {
  // const user: any = useAppSelector((state) => state.user?.user);
  const user = useSelector((state: AppStore) => state.user.user);
  console.log("user", user);
  let hostedpage: any = "";
  useEffect(() => {
    const url = window.location.href;
    if (url.split("/")[3] === "login") {
      hostedpage = url.split("/")[3];
      console.log("url", url);
      console.log(hostedpage, hostedpage.length);
    } else if (url.split("/")[3] !== "login") {
      hostedpage = url.split("/")[3];
      console.log("entra al else");
      console.log("url", url);
      console.log(hostedpage, hostedpage.length);
    }
  }, []);

  return (
    <Suspense fallback={<>Cargando...</>}>
      <Router>
        <ToastContainer />
        <div className={`${hostedpage.length !== 5 ? `d-flex` : `d-block`}`}>
          {user.email != "" ? <Sidebar /> : ""}

          <RoutesWithNotFound>
            <Route
              path="/"
              element={<Navigate to={privateRoutes.DASHBOARD} />}
            />
            <Route path={publicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={privateRoutes.LEAD} element={<Lead />} />
            </Route>
            <Route path="/signun" element={<CreateAccount />} />
          </RoutesWithNotFound>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
