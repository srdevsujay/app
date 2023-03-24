import React, { useState } from "react";
import { Card, Main } from "../../styled-components/main";
import FooterMenu from "../../components/Footer/index";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Leads from "./components/Leads/index";

const Contacts = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
                <Tab label="Leads" value="1" />
                <Tab label="Bookings" value="2" />
                <Tab label="Ventas" value="3" />
                {/* <Tab label="Carga Manual" value="4" /> */}
              </TabList>
            </Box>
            <TabPanel value="1">
              <Leads />
            </TabPanel>
            <TabPanel value="2">
              <h1>Bookings</h1>
            </TabPanel>
            <TabPanel value="3">
              <h1>Ventas</h1>
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
      <FooterMenu />
    </Main>
  );
};

export default Contacts;
