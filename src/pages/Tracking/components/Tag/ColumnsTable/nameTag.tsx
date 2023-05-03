import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export const nameTagColumn = () => {
  return {
    title: "Nombre",
    field: "tag",
    render: (dataTag: any) =>
      dataTag?.tag === null ? (
        ""
      ) : (
        <BackColorsTableOrigin
          width="max-content"
          marginBottom="5px"
          className={`${
            dataTag?.tag.substr(0, 1) === "@"
              ? "back-lila"
              : dataTag?.tag.substr(0, 1) === "!"
              ? "back-orange"
              : "back-green"
          }`}
        >
          {dataTag?.tag.substr(0, 1) === "@" ? (
            <img src={click} alt="" className="iconos-table-origin" />
          ) : dataTag?.tag.substr(0, 1) === "!" ? (
            <CheckCircleOutlinedIcon
              style={{
                color: "#F08303",
                fontSize: "17px",
                marginTop: "2px",
                marginLeft: "-3px",
                marginRight: "4px",
              }}
            />
          ) : (
            <img src={venta} alt="" className="iconos-table-origin" />
          )}
          {dataTag?.tag.substr(1)}
        </BackColorsTableOrigin>
      ),
  };
};
