import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";

export const tagColumn = () => {
  return {
    title: "Etiqueta",
    field: "tag",
    render: (dataContacts: any) =>
      dataContacts?.tag === null ? (
        ""
      ) : (
        <BackColorsTableOrigin
          width="max-content"
          marginBottom="5px"
          className="back-green"
        >
          <img src={venta} alt="" className="iconos-table-origin" />
          {dataContacts?.tag.substr(1)}
        </BackColorsTableOrigin>
      ),
  };
};
//           onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
