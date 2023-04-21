import React, { useState, useEffect } from "react";
import { Card, Main } from "../../styled-components/main";
import FooterMenu from "../../components/Footer/index";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import "./styled-components/style.css";
import Products from "./components/Products/index";
import TagTracking from "./components/Tag";
import Attribution from "./components/Attribution/index";
import FormAttribution from "./components/Attribution/FormAttribution";

const Tracking = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let localStorageChangeTab: string | null | number =
    localStorage.getItem("CreateProduct");

  useEffect(() => {
    if (localStorageChangeTab == 3) {
      setValue("3");
      localStorage.setItem("CreateProduct", "0");
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
                <Tab label="Script" value="1" />
                <Tab label="Reglas de URL" value="2" />
                <Tab label="Productos" value="3" />
                <Tab label="Etiquetas" value="4" />
                <Tab label="Atribución de venta" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">{/* <Leads /> */}</TabPanel>
            <TabPanel value="2">{/* <Booking /> */}</TabPanel>
            <TabPanel value="3">
              <Products />
            </TabPanel>
            <TabPanel value="4">
              <TagTracking />
            </TabPanel>
            <TabPanel value="5">
              <FormAttribution />
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
      <FooterMenu />
    </Main>
  );
};

export default Tracking;
