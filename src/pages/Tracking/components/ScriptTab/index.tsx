import { FormControl } from "@mui/material";
import ClipboardJS from "clipboard";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { getTrackingFunnel } from "../../../../redux/state/slices/dashboard/dashboardThunk";
import ScriptConstants from "./ScriptConstants";
import { SelectScript } from "../../styled-components/TableRule";
import {
  TitleHelvetica,
  Title,
} from "../../../../styled-components/Title/index";

const ScriptTab = () => {
  new ClipboardJS(".btn");
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getTrackingFunnel());
  }, []);

  const [domain, setDomain] = useState("");
  const funnels = useAppSelector((state) => state.dashboard.dataTracking);
  const handleChange = (event: any) => {
    setDomain(event.target.value);
  };

  console.log("domain", domain);
  console.log("funnels", funnels);

  let numberTab = localStorage.getItem("CreateProduct");
  // useEffect(() => {
  //   if(numberTab == 3){
  //     console.log('numberTab', numberTab);
  //     setCurrentTab(numberTab);
  //   }
  // }, [numberTab])

  return (
    <section className="w-75 mt-3">
      <div className="row">
        <div className="col-sm-12">
          <Title fontSize="16px" color="#192a3e">
            Guión universal
          </Title>
        </div>
        <div className="col-sm-12">
          <TitleHelvetica fontSize="14px" color="#192a3e">
            El script universal recopila información de seguimiento y crea
            clientes potenciales etiquetados con una etiqueta personalizada.
          </TitleHelvetica>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-12">
          <Title fontSize="14px" color="#030229">
            Seleccionar Funnel
          </Title>
        </div>
        <div className="form-group col-sm-12">
          <FormControl>
            <SelectScript className="css-select-1" onChange={handleChange}>
              {funnels.map((funnel: any) => (
                <>
                  <option value={funnel.id}>{funnel.funnel_name}</option>
                </>
              ))}
            </SelectScript>
          </FormControl>
        </div>
      </div>
      <div className="row mt-2">
        <div
          className="col-sm-12"
          style={{ paddingLeft: "12px", paddingRight: "42px" }}
        >
          <ScriptConstants funnels={domain} />
        </div>
      </div>
    </section>
  );
};

export default ScriptTab;
