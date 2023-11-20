import React, { useContext, useEffect, useState } from "react";
import { Card, Main } from "../../styled-components/main";
import FooterMenu from "../../components/Footer/index";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import "./styled-components/style.css";
import ProfileTab from "./components/ProfileTab/index";
import IntegrationTab from "./components/IntegrationTab/index";
import BillingTab from "./components/BillingTab/index";
import { useAppDispatch, useAppSelector } from "../../hooks/appDispatch";
import { obtainSubscriptionUser } from "../../redux/state/slices/configuration/configurationThunk";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

const Configuration = () => {
  const { toggleSlider } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("1");

  useEffect(() => {
    dispatch(obtainSubscriptionUser());
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let localStorageChangeTab: string | null | number =
    localStorage.getItem("setIntegrationTab");

  useEffect(() => {
    if (localStorageChangeTab == 2) {
      setValue("2");
      localStorage.removeItem("setIntegrationTab");
    }
  }, [localStorageChangeTab]);

  const { theme, themeDarkLight } = useContext(ThemeContext);

  return (
    <Main
      // width={toggleSlider === true ? "87vw" : "96vw"}
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
                <Tab
                  label="Perfil"
                  value="1"
                  style={{ padding: "12px 16px" }}
                />
                <Tab
                  label="Integraciones"
                  value="2"
                  style={{ padding: "12px 16px" }}
                />
                <Tab
                  label="Facturación"
                  value="3"
                  style={{ padding: "12px 16px" }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ProfileTab />
            </TabPanel>
            <TabPanel value="2">
              <IntegrationTab />
            </TabPanel>
            <TabPanel value="3">
              <BillingTab />
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
      {/* <FooterMenu /> */}
    </Main>
  );
};

export default Configuration;
