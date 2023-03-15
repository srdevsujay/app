import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";

export const lastOriginColumn = () => {
  return {
    title: "PRIMER ORIGEN",
    field: "last_origentag",
    render: (dataContacts: any) =>
      dataContacts?.last_origentag === null ? (
        ""
      ) : (
        <BackColorsTableOrigin
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
            <img src={venta} alt="" className="iconos-table-origin" />
          ) : (
            ""
          )}
          {dataContacts?.last_origentag.substr(1)}
        </BackColorsTableOrigin>
      ),
  };
};
