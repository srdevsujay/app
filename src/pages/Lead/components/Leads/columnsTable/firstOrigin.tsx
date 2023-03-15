import { BackColorsTableOrigin } from "../../../../../styled-components/Table/index";
import "../../../../../styled-components/Table/style.css";
import venta from "../../../../../assets/images/venta.svg";
import click from "../../../../../assets/images/click.svg";

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
            ""
          )}
          {dataContacts?.first_origintag.substr(1)}
        </BackColorsTableOrigin>
      ),
  };
};

// render: (dataContacts) =>
//       dataContacts?.first_origintag === null ? (
//         <div className="widthDateLead">
//           <span className="font-HelveticaNeueL etiquetaA span-width-table"></span>
//         </div>
//       ) :
//       <div className="widthDateLead">
//         <span
//           className="font-HelveticaNeueL etiquetaA span-width-table"
//           onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
//         >{`${dataContacts?.first_origintag}`}</span>
//       </div>

//       dataContacts?.first_origintag.substr(0, 1) === "@" ? (
//         <div className="back-lila">
//           <img src={click} alt="" className="venta" />
//           <span className="venta-span">
//             {dataContacts?.first_origintag.substr(1)}
//           </span>
//         </div>
//       ) : dataContacts?.first_origintag.substr(0, 1) === "!" ? (
//         <div className="back-orange">
//           <CheckCircleOutlinedIcon style={{ color: "#F08303" }} />
//           <span className="venta-span">
//             {dataContacts?.first_origintag.substr(1)}
//           </span>
//         </div>
//       ) : (
//         <div className="back-green">
//           <img src={venta} alt="" className="venta" />
//           <span className="venta-span">
//             {dataContacts?.first_origintag.substr(1)}
//           </span>
//         </div>
//       ),
