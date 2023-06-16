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
import { ThemeProvider } from "./utilities/theme/ThemeContext";
import useThemeMode from "./hooks/useThemeMode";

const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Funnel = lazy(() => import("./pages/Funnel"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Tracking = lazy(() => import("./pages/Tracking/index"));
const Configuration = lazy(() => import("./pages/Configuration/index"));
const Auth = lazy(() => import("./pages/Auth"));
const Register = lazy(() => import("./pages/Register/CreateAccount"));

function App() {
  const user = useSelector((state: AppStore) => state.user.user);
  const usersub = useAppSelector((state) => state.user?.user);
  const subscriptionUser = useAppSelector(
    (state) => state.configuration?.subscriptionUser
  );

  let hostedpage: any = "";
  useEffect(() => {
    const url = window.location.href;
    if (url.split("/")[3] === "login") {
      hostedpage = url.split("/")[3];
    } else if (url.split("/")[3] !== "login") {
      hostedpage = url.split("/")[3];
    }
  }, []);

  return (
    <Suspense fallback={<>Cargando...</>}>
      <Router>
        <ToastContainer />
        <div className={`${hostedpage.length !== 5 ? `d-flex` : `d-block`}`}>
          <ThemeProvider>
            {user !== null ? <Sidebar /> : ""}
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={privateRoutes.DASHBOARD} />}
              />
              <Route path={publicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                {usersub?.usersub.length !== 0 ||
                Object.keys(subscriptionUser).length !== 0 ||
                user.user_type === 1 ? (
                  // console.log("navigate dash");
                  <>
                    <Route
                      path={privateRoutes.DASHBOARD}
                      element={<Dashboard />}
                    />
                    <Route path={privateRoutes.FUNNEL} element={<Funnel />} />
                    <Route
                      path={privateRoutes.CONTACT}
                      element={<Contacts />}
                    />
                    <Route
                      path={privateRoutes.TRACKING}
                      element={<Tracking />}
                    />
                    <Route
                      path={privateRoutes.CONFIGURATION}
                      element={<Configuration />}
                    />
                  </>
                ) : (
                  // console.log("navigate conf");
                  <Route
                    path={privateRoutes.CONFIGURATION}
                    element={<Configuration />}
                  />
                )}
                {/* <Route path={privateRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={privateRoutes.FUNNEL} element={<Funnel />} />
              <Route path={privateRoutes.CONTACT} element={<Contacts />} />
              <Route path={privateRoutes.TRACKING} element={<Tracking />} />
              <Route
                path={privateRoutes.CONFIGURATION}
                element={<Configuration />}
              /> */}
                <Route path={privateRoutes.AUTH} element={<Auth />} />
              </Route>
              <Route path="/signun" element={<CreateAccount />} />
            </RoutesWithNotFound>
          </ThemeProvider>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
