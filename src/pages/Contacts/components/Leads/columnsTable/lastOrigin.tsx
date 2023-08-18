import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Tooltip } from "@mui/material";

export const lastOriginColumn = () => {
  return {
    title: "ULTIMO ORIGEN",
    field: "last_origentag",
    render: (dataContacts: any) =>
      dataContacts?.last_origentag === null ? (
        ""
      ) : (
        <Tooltip
          title={
            <>
              <span>
                CA: {dataContacts?.last_adset_name} | AD:{" "}
                {dataContacts?.last_ad_name}
              </span>
            </>
          }
          placement="top"
        >
          <BackColorsTableOrigin
            width="max-content"
            marginBottom="5px"
            className={`${
              dataContacts?.last_origentag.substr(0, 1) === "@"
                ? "back-lila"
                : dataContacts?.last_origentag.substr(0, 1) === "!"
                ? "back-orange"
                : "back-green"
            }`}
          >
            {dataContacts?.last_origentag.substr(0, 1) === "@" ? (
              <img src={click} alt="" className="iconos-table-origin" />
            ) : dataContacts?.last_origentag.substr(0, 1) === "!" ? (
              <CheckCircleOutlinedIcon
                style={{
                  color: "#F08303",
                  fontSize: "17px",
                  marginTop: "2px",
                  marginRight: "4px",
                }}
              />
            ) : (
              <img src={venta} alt="" className="iconos-table-origin" />
            )}
            {dataContacts?.last_origentag.substr(1)}
          </BackColorsTableOrigin>
        </Tooltip>
      ),
  };
};
