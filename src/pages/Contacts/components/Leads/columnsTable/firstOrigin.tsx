import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Tooltip } from "@mui/material";

export const firstOriginColumn = () => {
  return {
    title: "PRIMER ORIGEN",
    field: "first_origintag",
    render: (dataContacts: any) =>
      dataContacts?.first_origintag === null ? (
        ""
      ) : (
        <Tooltip
          title={
            <>
              <span>
                {dataContacts?.first_adset_name === null
                  ? ""
                  : `CA: ${dataContacts?.first_adset_name} | AD:
                    ${dataContacts?.first_ad_name}`}
              </span>
            </>
          }
          placement="top"
        >
          <BackColorsTableOrigin
            width="max-content"
            marginBottom="5px"
            className={`${
              dataContacts?.first_origintag.substr(0, 1) === "@"
                ? "back-lila"
                : dataContacts?.first_origintag.substr(0, 1) === "!"
                ? "back-orange"
                : "back-green"
            }`}
          >
            {dataContacts?.first_origintag.substr(0, 1) === "@" ? (
              <img src={click} alt="" className="iconos-table-origin" />
            ) : dataContacts?.first_origintag.substr(0, 1) === "!" ? (
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
            {dataContacts?.first_origintag.substr(1)}
          </BackColorsTableOrigin>
        </Tooltip>
      ),
  };
};
//           onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
