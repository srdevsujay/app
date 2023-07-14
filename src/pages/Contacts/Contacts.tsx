import React, { useContext, useState } from "react";
import { Card, Main } from "../../styled-components/main";
import FooterMenu from "../../components/Footer/index";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Leads from "./components/Leads/index";
import Booking from "./components/Booking";
import Sales from "./components/Sales/index";
import "./styled-components/style.css";
import { useAppSelector } from "../../hooks/appDispatch";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

const Contacts = () => {
  const [value, setValue] = useState("1");
  const { toggleSlider } = useAppSelector((state) => state.dashboard);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { theme, themeDarkLight, themeTitleTab } = useContext(ThemeContext);

  const tableStyles = {
    backgroundColor: themeTitleTab.background,
    color: themeTitleTab.text,
    // Agrega más estilos según sea necesario
  };

  return (
    <Main
      width={toggleSlider === true ? "87vw" : "96vw"}
      theme={themeDarkLight}
    >
      <Card height="94vh" borderRadius="16px" theme={theme}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Leads" value="1" style={tableStyles} />
                <Tab label="Bookings" value="2" />
                <Tab label="Ventas" value="3" />
                {/* <Tab label="Carga Manual" value="4" /> */}
              </TabList>
            </Box>
            <TabPanel value="1">
              <Leads />
            </TabPanel>
            <TabPanel value="2">
              <Booking />
            </TabPanel>
            <TabPanel value="3">
              <Sales />
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
      {/* <FooterMenu /> */}
    </Main>
  );
};

export default Contacts;
