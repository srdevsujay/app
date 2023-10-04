import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { saveAs } from "file-saver";
import { setAutoFreeze } from "immer";
import moment from "moment";
import { addDays } from "date-fns";
import { Card, Main } from "../../styled-components/main";
import { Bar } from "./styled-components/dashboardStyled";
import { useAppDispatch, useAppSelector } from "../../hooks/appDispatch";
import {
  getMetricFunnel,
  getTrackingFunnel,
} from "../../redux/state/slices/dashboard/dashboardThunk";
import TablePNL from "./components/TablePNL";
import DateFilter from "./components/DateFilter";
import "./styled-components/style.css";
import SourceFilter from "./components/SourceFilter";
import Graphics from "./components/Graphics";
import FooterMenu from "../../components/Footer/index";
import { Title } from "../../styled-components/Title/index";
import {
  IntegrationAlert,
  IntegrationAlertPermissionFacebook,
} from "../../components/alerts/IntegrationAlert";

import {
  yesterDay,
  todayDay,
  handleDays,
  currentWeek,
  lastWeek,
  currentMonth,
} from "../../utilities/functionDateFilter/HandleDate";
import { totalPnl } from "./components/TotalTablePnl";
import styled from "styled-components";
import { ThemeContext } from "../../utilities/theme/ThemeContext";
import Toggle from "../../utilities/theme/ToggleButton";
// import { DataHelpVideo } from "../../utilities/DataHelpVideo";
import { HelpVideo } from "../../components/HelpVideo";
import ExportExcel from "../../components/ExportExcel/ExportExcel";
import video from "../../assets/images/video.svg";
import videoDark from "../../assets/images/videoDark.svg";
import { MuiMenuList } from "../../styled-components/select/index";

// setAutoFreeze(false);

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  // Agrega estilos adicionales según sea necesario
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [pnlDays, setPnlDays] = useState<number>(7);
  const [currentDayFilter, SetCurrentDayFilter] = useState(7);
  const [flagModal, setFlagModal] = useState<number>(0);
  const [titleDatePickerPNL, setTitleDatePickerPNL] = useState(
    "Selecciona una fecha"
  );
  const [groupPlataform, setGroupPlataform] = useState([]);
  const [selectPlatform, setSelectPlatform] = useState([]);
  const dispatch = useAppDispatch();

  const [currentCalendar, setCurrentCalendar] = useState([
    {
      startDate: addDays(new Date(), -6),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [canCallMetricFunnel, setCanCallMetricFunnel] = useState(true);
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  // console.log("theme", theme);

  const {
    tokenfacebook,
    tokengoogle,
    toggleSlider,
    isLoading,
    dataPNL,
    permissionFacebook,
  } = useAppSelector((state) => state.dashboard);

  console.log("tokenfacebook", tokenfacebook);
  console.log("tokengoogle", tokengoogle);
  console.log("isLoading", isLoading);

  const idUser = useAppSelector((state) => state.user.user.id);

  // const themeState = useAppSelector((state) => state.configuration.theme);
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);
  console.log("themeState--.", themeState);

  // Ejemplo del type, en este caso el tipo ":AppStore" viebe del Store
  // const dataFunnel = useAppSelector(
  //   (state: AppStore) => state.dashboard.dataFunnel
  // );

  useEffect(() => {
    if (canCallMetricFunnel) {
      dispatch(getMetricFunnel());
      setCanCallMetricFunnel(false);
    }
  }, [canCallMetricFunnel]);

  useEffect(() => {
    if (idUser !== null) {
      dispatch(getTrackingFunnel(idUser));
    }
  }, [idUser]);

  useEffect(() => {
    if (tokenfacebook === true || tokengoogle === true) {
      if (tokenfacebook === true && tokengoogle === true) {
        setTitle(
          "Por favor iniciar sesion en FacebookAds y GoogleAds para actualizar los tokens"
        );
      } else if (tokenfacebook === true && tokengoogle === false) {
        setTitle(
          "Por favor iniciar sesion en FacebookAds para actualizar el token"
        );
      } else if (tokenfacebook === false && tokengoogle === true) {
        setTitle(
          "Por favor iniciar sesion en GoogleAds para actualizar el token"
        );
      }
    }
  }, [tokenfacebook, tokengoogle]);

  useEffect(() => {
    if (title === "") return;
    IntegrationAlert(title, navigate);
  }, [title]);

  useEffect(() => {
    if (permissionFacebook === true) {
      IntegrationAlertPermissionFacebook(
        "Facebook ADS no tiene los permisos suficientes para obtener métricas de su cuenta publicitaria. Esto puede deberse a que la cuenta publicitaria no está asociada a su cuenta de Facebook personal o empresarial"
      );
    }
  }, [permissionFacebook]);

  const handleDateDashboardMain = (i: number) => {
    console.log("indice", i);

    const formate1 = moment(currentCalendar[0].startDate).format("YYYY-MM-DD");
    const formate2 = moment(currentCalendar[0].endDate).format("YYYY-MM-DD");
    const dateFormat = {
      fecha_inicial: formate1,
      fecha_final: formate2,
    };
    const fechaInicio = new Date(dateFormat.fecha_inicial).getTime();
    const fechaFin = new Date(dateFormat.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setTitleDatePickerPNL(
      `${dateFormat.fecha_inicial} - ${dateFormat.fecha_final}`
    );

    //acá fecha
    if (
      dateFormat.fecha_inicial !== "Invalid date" &&
      dateFormat.fecha_final !== "Invalid date"
    ) {
      setFlagModal(1);
      return dispatch(getMetricFunnel(dateFormat));
    }
  };

  const handleYesterday = () => {
    const item = yesterDay();
    setPnlDays(1);
    setFlagModal(1);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    return dispatch(getMetricFunnel(item));
  };

  const handleToday = () => {
    const item = todayDay();
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(1);
    setFlagModal(1);
    return dispatch(getMetricFunnel(item));
  };

  const handleSevenDay = () => {
    const item = handleDays(6);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(7);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleCurrentWeek = () => {
    const item = currentWeek();
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleLastWeek = () => {
    const item = lastWeek();
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleThirtyDays = () => {
    const item = handleDays(30);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(30);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleCurrentMonth = () => {
    const item = currentMonth();
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleFourteenDays = () => {
    const item = handleDays(14);
    setTitleDatePickerPNL(`${item.fecha_inicial} - ${item.fecha_final}`);
    setPnlDays(14);
    setFlagModal(1);
    dispatch(getMetricFunnel(item));
  };

  const handleThreeMonth = () => {
    const dayInitial = new Date();
    const xDayInitial = 50;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
    const dayFinal = new Date();
    const xDayFinal = 0;
    dayFinal.setDate(dayFinal.getDate() - xDayFinal);
    let firstDay = moment(dayInitial).format("YYYY-MM-DD");
    let lastDay = moment(dayFinal).format("YYYY-MM-DD");
    const dateFormat = {
      fecha_inicial: firstDay,
      fecha_final: lastDay,
    };
    const fechaInicio = new Date(firstDay).getTime();
    const fechaFin = new Date(lastDay).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerPNL(`${firstDay} - ${lastDay}`);
    setPnlDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(getMetricFunnel(dateFormat));
  };

  const { theme, themeDarkLight } = useContext(ThemeContext);

  useEffect(() => {
    if (selectPlatform.length === 0) return;
    totalPnl(selectPlatform, themeState, theme);
  }, [selectPlatform, themeState, theme]);

  console.log("dataPNL.length", dataPNL.length);

  return (
    <Main width={toggleSlider ? "87vw" : "96vw"} theme={themeDarkLight}>
      {/* <MuiMenuList background="red"> */}
      <Card height="94vh" borderRadius="16px" theme={theme}>
        {/* <Container theme={theme}> */}
        <Title fontSize="17px">Dashboard PNL ({pnlDays})</Title>
        {/* </Container> */}
        <div className="row">
          <Bar></Bar>
          <div className="col-sm-12">
            <div className="d-flex justify-content-end">
              {/* <Title fontSize="14px" color="#192a3e">
                      {`PNL (${pnlDays})`}
                    </Title> */}
              <div className="d-flex mt-2">
                <SourceFilter
                  groupPlataform={groupPlataform}
                  setGroupPlataform={setGroupPlataform}
                  setSelectPlatform={setSelectPlatform}
                />
                <HelpVideo
                  title={"Video Tutorial Dashboard"}
                  image={!themeState ? video : videoDark}
                  url={
                    "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be"
                  }
                />
                <ExportExcel
                  dataFile={groupPlataform}
                  titleFile={"tabla pnl"}
                />
                <DateFilter
                  titleDatePickerPNL={titleDatePickerPNL}
                  handleDateDashboardMain={handleDateDashboardMain}
                  flagModal={flagModal}
                  setFlagModal={setFlagModal}
                  currentCalendar={currentCalendar}
                  setCurrentCalendar={setCurrentCalendar}
                  handleYesterday={handleYesterday}
                  handleToday={handleToday}
                  handleSevenDay={handleSevenDay}
                  handleCurrentWeek={handleCurrentWeek}
                  handleLastWeek={handleLastWeek}
                  handleThirtyDays={handleThirtyDays}
                  handleCurrentMonth={handleCurrentMonth}
                  handleFourteenDays={handleFourteenDays}
                  handleThreeMonth={handleThreeMonth}
                  index={0}
                  theme={theme}
                />
              </div>
            </div>
            {/* {isLoading === true ? ( */}
            {dataPNL.length === 0 && isLoading === true ? (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "250px", zIndex: "99999999" }}
              >
                <BeatLoader color="#3997FF" />
              </div>
            ) : (
              <TablePNL
                tablePnl={groupPlataform}
                selectPlatform={selectPlatform}
              />
            )}
          </div>
          <div className="col-sm-12">
            <Graphics
              selectPlatform={selectPlatform}
              groupPlataform={groupPlataform}
              dataPNL={dataPNL}
              isLoading={dataPNL}
            />
          </div>
        </div>
      </Card>
      {/* </MuiMenuList> */}
      {/* <FooterMenu /> */}
    </Main>
  );
};

export default Dashboard;
