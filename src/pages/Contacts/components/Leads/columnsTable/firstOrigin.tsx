import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export const firstOriginColumn = () => {
  return {
    title: "PRIMER ORIGEN",
    field: "first_origintag",
    render: (dataContacts: any) =>
      dataContacts?.first_origintag === null ? (
        ""
      ) : (
        <BackColorsTableOrigin
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
            <img src={venta} alt="" className="iconos-table-origin" />
          ) : (
            <CheckCircleOutlinedIcon style={{ color: "#F08303" }} />
          )}
          {dataContacts?.first_origintag.substr(1)}
        </BackColorsTableOrigin>
      ),
  };
};
//           onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
