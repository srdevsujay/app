import React, { useEffect, useState } from "react";
import TabMenuLeads from "../../../Contacts/components/TabMenuLeads/index";
import NormalTable from "../../../../utilities/Table/NormalTable";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { obtainApiTag } from "../../../../redux/state/slices/tracking/trackingThunk";
import { ColumnsTag } from "./ColumnsTable/ColumnsTag";

const TagTracking = () => {
  const dispatch = useAppDispatch();
  const { dataTag } = useAppSelector((state) => state.tracking);
  const [columnsTag, setsetColumnsTag] = useState<any>();
  console.log("dataTag", dataTag);
  console.log("columnsTag", columnsTag);

  useEffect(() => {
    dispatch(obtainApiTag());
  }, []);

  useEffect(() => {
    if (!dataTag) return;
    const columns = ColumnsTag();
    setsetColumnsTag(columns);
  }, [dataTag]);

  return (
    // <TabMenuLeads
    //   nameTab={nameTab}
    //   columns={currentColumns}
    //   setDataFunnelToggle={setDataFunnelToggle}
    //   dataFunnelToggle={dataFunnelToggle}
    //   columnsToSet={columnsToSet}
    //   updateData={updateData}
    //   setSearchString={setSearchString}
    //   currentEdit={currentEdit}
    //   setCurrentEdit={setCurrentEdit}
    //   idEditCurrent={idEditCurrent}
    //   setIdEditCurrent={setIdEditCurrent}
    //   openModal={openModal}
    // />
    <NormalTable
      data={dataTag}
      columns={columnsTag}
      pageSizeOptions={[7, 15, 31, 31]}
      maxBodyHeight={"60vh"}
      pageSize={7}
    />
  );
};

export default TagTracking;
