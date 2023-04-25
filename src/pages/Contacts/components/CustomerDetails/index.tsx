import React, { useEffect, useState } from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Card, Main } from "../../../../styled-components/main/index";
import "../../styled-components/style.css";
import { useAppSelector } from "../../../../hooks/appDispatch";
import moment from "moment";
import Journey from "../popupCustomerDetail/Journey";
import Shopping from "../popupCustomerDetail/Shopping";
import BookingPopup from "../popupCustomerDetail/Booking";
import Data from "../popupCustomerDetail/Data";

const CustomerDetails = () => {
  const {
    clicks,
    phonesandips,
    purchase,
    source,
    funnels,
    journey,
    booking,
    emails,
  } = useAppSelector((state) => state.contact.dataUser);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [value, setValue] = useState("1");
  const [currentJourney, setCurrentJourney] = useState<any>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!journey) return;
    const dataJourney = journey?.map((jour: any) => ({
      ...jour,
      date: moment(jour.date).format("YYYY-MM-DD hh:mm:ss"),
    }));
    const result = [
      ...dataJourney
        .reduce((r: any, o: any) => {
          const key =
            o.date +
            "-" +
            o.event_name +
            "-" +
            o.funnel_name +
            "-" +
            o.step +
            "-" +
            o.step_url +
            "-" +
            o.tag +
            "-" +
            o.ts +
            "-" +
            o.url;
          const item = r.get(key) || Object.assign({}, o, {});
          return r.set(key, item);
        }, new Map())
        .values(),
    ];

    setCurrentJourney(result);
  }, [journey]);

  return (
    <Main>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Recorrido"
                value="1"
                className={
                  value === "1" ? "tabs active-tabs-recorrido" : "tabs"
                }
              />
              <Tab
                label="Compras"
                value="2"
                className={value === "2" ? "tabs active-tabs-compras" : "tabs"}
              />
              <Tab
                label="Bookings"
                value="3"
                className={value === "3" ? "tabs active-tabs-booking" : "tabs"}
              />
              <Tab
                label="Datos"
                value="4"
                className={value === "4" ? "tabs active-tabs-datos" : "tabs"}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Journey currentJourney={currentJourney} time_Zone={time_Zone} />
          </TabPanel>
          <TabPanel value="2">
            <Shopping purchase={purchase} time_Zone={time_Zone} />
          </TabPanel>
          <TabPanel value="3">
            <BookingPopup booking={booking} time_Zone={time_Zone} />
          </TabPanel>
          <TabPanel value="4">
            <Data phonesandips={phonesandips} emails={emails} />
          </TabPanel>
        </TabContext>
      </Box>
    </Main>
  );
};

export default CustomerDetails;
