import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { joinedColumn } from "./columnsTable/joined";
import { nameColumn } from "./columnsTable/name";
import { emailColumn } from "./columnsTable/email";
import { totalValueColumn } from "./columnsTable/totalValue";
import { firstOriginColumn } from "./columnsTable/firstOrigin";
import { lastOriginColumn } from "./columnsTable/lastOrigin";
import { buttonEditColumn } from "./columnsTable/buttons";

export const TableContacts = (dataContacts: any, time_Zone: any) => {
  console.log("dataContacts", dataContacts);
  console.log("time_Zone", time_Zone);
  return [
    joinedColumn(time_Zone),
    nameColumn(),
    emailColumn(),
    totalValueColumn(),
    firstOriginColumn(),
    lastOriginColumn(),
    {
      title: "",
      field: "...",
      sign: "",
      sortable: true,
      class: "text-left",
      value: "",
      // render: (param, index) => (
      render: (param: any, index: any) => buttonEditColumn(),
      // <div class="btn-group" role="group">
      //   <button
      //     id="btnGroupDrop1"
      //     type="button"
      //     class="btn mr-2 dropdown-toggle"
      //     data-toggle="dropdown"
      //     aria-haspopup="true"
      //     aria-expanded="false"
      //   >
      //     <img src={ellipsisOff} alt="" className="" />
      //   </button>
      //   <div
      //     class="dropdown-menu dropdown-style"
      //     aria-labelledby="btnGroupDrop1"
      //   >
      //     <button
      //       class="dropdown-item dropdown-style-button"
      //       onClick={() => editLead(param)}
      //     >
      //       <img src={edit} height="12" className="" />
      //       Editar
      //     </button>
      //     <button
      //       class="dropdown-item dropdown-style-button"
      //       onClick={() => deleteLead(param)}
      //     >
      //       <img src={deleted} height="12" className="" />
      //       Eliminar
      //     </button>
      //     {/* <button class="dropdown-item" href="#">Dropdown link</button> */}
      //   </div>
      // </div>
    },
  ];
};
