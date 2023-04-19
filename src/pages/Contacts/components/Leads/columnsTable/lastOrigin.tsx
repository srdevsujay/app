import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export const lastOriginColumn = () => {
  return {
    title: "ULTIMO ORIGEN",
    field: "last_origentag",
    render: (dataContacts: any) =>
      dataContacts?.last_origentag === null ? (
        ""
      ) : (
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
            <CheckCircleOutlinedIcon style={{ color: "#F08303" }} />
          ) : (
            <img src={venta} alt="" className="iconos-table-origin" />
          )}
          {dataContacts?.last_origentag.substr(1)}
        </BackColorsTableOrigin>
      ),
  };
};
