import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { nameColumn } from "./ColumnsTable/name";
import { categoryColumn } from "./ColumnsTable/category";
import { priceColumn } from "./ColumnsTable/price";
import { skuColumn } from "./ColumnsTable/sku";
import { tagColumn } from "./ColumnsTable/tag";
import { buttonEditColumn } from "../../../Contacts/components/Leads/columnsTable/buttons";

export const ColumnsProduct = (
  dataContacts: any,
  time_Zone: any,
  setCurrentEdit: any,
  setIdEditCurrent: any
) => {
  return [
    nameColumn(),
    categoryColumn(),
    priceColumn(),
    skuColumn(),
    tagColumn(),
    // totalValueColumn(),
    // firstOriginColumn(),
    buttonEditColumn(setCurrentEdit, setIdEditCurrent),
  ];
};
