import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export const tagRuleColumn = () => {
  return {
    title: "PRIMER ORIGEN",
    field: "first_origintag",
    render: (dataRule: any) =>
      dataRule?.tag === null ? (
        ""
      ) : (
        <BackColorsTableOrigin
          width="max-content"
          marginBottom="5px"
          className={`${
            dataRule?.tag.substr(0, 1) === "@"
              ? "back-lila"
              : dataRule?.tag.substr(0, 1) === "!"
              ? "back-orange"
              : "back-green"
          }`}
        >
          {dataRule?.tag.substr(0, 1) === "@" ? (
            <img src={click} alt="" className="iconos-table-origin" />
          ) : dataRule?.tag.substr(0, 1) === "!" ? (
            <CheckCircleOutlinedIcon style={{ color: "#F08303" }} />
          ) : (
            <img src={venta} alt="" className="iconos-table-origin" />
          )}
          {dataRule?.tag.substr(1)}
        </BackColorsTableOrigin>
      ),
  };
};
