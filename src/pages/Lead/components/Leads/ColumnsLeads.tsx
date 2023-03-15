import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { joinedColumn } from "./columnsTable/atr";

export const TableContacts = (dataContacts: any, time_Zone: any) => {
  console.log("dataContacts", dataContacts);
  console.log("time_Zone", time_Zone);
  return [
    joinedColumn(time_Zone),
    // {
    //   title: "SE UNIO EL...",
    //   field: "joined",
    //   render: (dataContacts: any) => (
    //     <div className="widthDateLead">
    //       <span
    //         className="font-HelveticaNeueL etiquetaA span-width-table"
    //         // onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
    //       >
    //         {formattTimeZone(dataContacts?.joined, time_Zone)}
    //       </span>
    //     </div>
    //   ),
    // },
    {
      title: "NOMBRE",
      field: "name",
      // render: (dataContacts) => (
      //   <div className="widthDateLead">
      //     {/* <img src={perfilAvatar} style={{ width: 20, borderRadius: "50%" }} /> */}
      //     <span
      //       className="font-HelveticaNeueL etiquetaA span-width-table"
      //       onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
      //     >{`${dataContacts?.name}`}</span>
      //   </div>
      // ),
    },
    {
      title: "E-MAIL",
      field: "email",
      // render: (dataContacts) => (
      //   <div
      //     className="widthDateLead"
      //     onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
      //   >
      //     <span className="font-HelveticaNeueL etiquetaA span-width-table">{`${dataContacts?.email}`}</span>
      //   </div>
      // ),
    },
    {
      title: "VALOR TOTAL",
      field: "payments",
      sign: "",
      sortable: true,
      class: "text-right",
      value: "",
      // render: (dataContacts) =>
      //   dataContacts?.payments === null ? (
      //     <div className="">
      //       <span className="text-grey font-HelveticaNeueL etiquetaA"></span>
      //     </div>
      //   ) : (
      //     <div className="">
      //       <span
      //         className={`${
      //           dataContacts?.payments == 0
      //             ? "text-grey font-HelveticaNeueL etiquetaA span-width-table"
      //             : "text-green font-HelveticaNeueL etiquetaA span-width-table"
      //         }`}
      //         onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
      //       >
      //         {`$${dataContacts?.payments.toFixed(2)}`}
      //       </span>
      //     </div>
      //   ),
    },
    {
      title: "PRIMER ORIGEN",
      field: "first_origintag",
      sign: "",
      sortable: true,
      class: "text-right",
      value: "",
      // render: (dataContacts) =>
      //   dataContacts?.first_origintag === null ? (
      //     <div className="widthDateLead">
      //       <span className="font-HelveticaNeueL etiquetaA span-width-table"></span>
      //     </div>
      //   ) : // <div className="widthDateLead">
      //   //   <span
      //   //     className="font-HelveticaNeueL etiquetaA span-width-table"
      //   //     onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
      //   //   >{`${dataContacts?.first_origintag}`}</span>
      //   // </div>

      //   dataContacts?.first_origintag.substr(0, 1) === "@" ? (
      //     <div className="back-lila">
      //       <img src={click} alt="" className="venta" />
      //       <span className="venta-span">
      //         {dataContacts?.first_origintag.substr(1)}
      //       </span>
      //     </div>
      //   ) : dataContacts?.first_origintag.substr(0, 1) === "!" ? (
      //     <div className="back-orange">
      //       <CheckCircleOutlinedIcon style={{ color: "#F08303" }} />
      //       <span className="venta-span">
      //         {dataContacts?.first_origintag.substr(1)}
      //       </span>
      //     </div>
      //   ) : (
      //     <div className="back-green">
      //       <img src={venta} alt="" className="venta" />
      //       <span className="venta-span">
      //         {dataContacts?.first_origintag.substr(1)}
      //       </span>
      //     </div>
      //   ),
    },
    {
      title: "ULTIMO ORIGEN",
      field: "last_origentag",
      sign: "",
      sortable: true,
      class: "text-right",
      value: "",
      // render: (dataContacts) =>
      //   dataContacts?.last_origentag === null ? (
      //     <div className="widthDateLead">
      //       <span className="font-HelveticaNeueL etiquetaA span-width-table"></span>
      //     </div>
      //   ) : // (
      //   // <div className="widthDateLead">
      //   //   <span
      //   //     className="font-HelveticaNeueL etiquetaA span-width-table"
      //   //     onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
      //   //   >{`${dataContacts?.last_origentag}`}</span>
      //   // </div>

      //   dataContacts?.last_origentag.substr(0, 1) === "@" ? (
      //     <div className="back-lila">
      //       <img src={click} alt="" className="venta" />
      //       <span className="venta-span">
      //         {dataContacts?.last_origentag.substr(1)}
      //       </span>
      //     </div>
      //   ) : dataContacts?.last_origentag.substr(0, 1) === "!" ? (
      //     <div className="back-orange">
      //       <CheckCircleOutlinedIcon style={{ color: "#F08303" }} />
      //       <span className="venta-span">
      //         {dataContacts?.last_origentag.substr(1)}
      //       </span>
      //     </div>
      //   ) : (
      //     <div className="back-green">
      //       <img src={venta} alt="" className="venta" />
      //       <span className="venta-span">
      //         {dataContacts?.last_origentag.substr(1)}
      //       </span>
      //     </div>
      //   ),
    },
    // {
    //   // title: "",
    //   // field: "...",
    //   // sign: "",
    //   // sortable: true,
    //   class: "text-left",
    //   // value: "",
    //   render: (param, index) => (
    //     <div class="btn-group" role="group">
    //       <button
    //         id="btnGroupDrop1"
    //         type="button"
    //         class="btn mr-2 dropdown-toggle"
    //         data-toggle="dropdown"
    //         aria-haspopup="true"
    //         aria-expanded="false"
    //       >
    //         <img src={ellipsisOff} alt="" className="" />
    //       </button>
    //       <div
    //         class="dropdown-menu dropdown-style"
    //         aria-labelledby="btnGroupDrop1"
    //       >
    //         <button
    //           class="dropdown-item dropdown-style-button"
    //           onClick={() => editLead(param)}
    //         >
    //           <img src={edit} height="12" className="" />
    //           Editar
    //         </button>
    //         <button
    //           class="dropdown-item dropdown-style-button"
    //           onClick={() => deleteLead(param)}
    //         >
    //           <img src={deleted} height="12" className="" />
    //           Eliminar
    //         </button>
    //         {/* <button class="dropdown-item" href="#">Dropdown link</button> */}
    //       </div>
    //     </div>
    //   ),
    // },
  ];
};
