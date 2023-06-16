import { formattTimeZone } from "../../../../utilities/FormattTimeZone";
import { useAppSelector } from "../../../../hooks/appDispatch";

import { applyToColumn } from "../Tag/ColumnsTable/applyTo";
import { createDateColumn } from "../Tag/ColumnsTable/create";
import { exeptionColumn } from "../Tag/ColumnsTable/exeption";
import { wordColumn } from "../Tag/ColumnsTable/word";
import { nameColumn } from "../../../Contacts/components/Sales/columnsTable/name";
import { tagRuleColumn } from "../Tag/ColumnsTable/tag";
import { ButtonEditColumn } from "../../../Contacts/components/Leads/columnsTable/ButtonEditColumn";

export const ColumnsRule = (
  data: any,
  time_Zone: any,
  setCurrentEdit: any,
  setIdEditCurrent: any
) => {
  return [
    applyToColumn(),
    createDateColumn(time_Zone),
    exeptionColumn(),
    wordColumn(),
    nameColumn(),
    tagRuleColumn(),
    ButtonEditColumn(setCurrentEdit, setIdEditCurrent),
  ];
};
