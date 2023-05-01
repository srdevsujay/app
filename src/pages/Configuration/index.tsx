import React, { useEffect, useState } from "react";
import { Card, Main } from "../../styled-components/main";
import FooterMenu from "../../components/Footer/index";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import "./styled-components/style.css";
import ProfileTab from "./components/ProfileTab/index";
import IntegrationTab from "./components/IntegrationTab/index";

const Configuration = () => {
  const [value, setValue] = useState("1");
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

  return (
    <Main>
      <Card height="85vh" borderRadius="16px">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Perfil" value="1" />
                <Tab label="Integraciones" value="2" />
                <Tab label="Facturación" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <ProfileTab />
            </TabPanel>
            <TabPanel value="2">
              <IntegrationTab />
            </TabPanel>
            <TabPanel value="3">{/* <Products /> */}</TabPanel>
          </TabContext>
        </Box>
      </Card>
      <FooterMenu />
    </Main>
  );
};

export default Configuration;
