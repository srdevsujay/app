import React, { useEffect, useState } from "react";
import TabMenuLeads from "../../../Contacts/components/TabMenuLeads/index";
import NormalTable from "../../../../utilities/Table/NormalTable";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { obtainApiTag } from "../../../../redux/state/slices/tracking/trackingThunk";
import { ColumnsTag } from "./ColumnsTable/ColumnsTag";
import InputComponent from "../../../../components/input/Input.component";
import { useDebounce } from "../../../../hooks/useDebounce";
import { BeatLoader } from "react-spinners";
import HelpVideo from '../../../../components/HelpVideo/HelpVideo';

const TagTracking = () => {
  const dispatch = useAppDispatch();
  const { dataTag } = useAppSelector((state) => state.tracking);
  const [columnsTag, setsetColumnsTag] = useState<any>();
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const [searchString, setSearchString] = useState("");
  const searchStringDebounced = useDebounce(searchString, 1000);

  useEffect(() => {
    dispatch(obtainApiTag());
  }, []);

  useEffect(() => {
    // if (!dataTag) return;
    const columns = ColumnsTag();
    setsetColumnsTag(columns);
    setOriginalData(dataTag);
    setFilteredData(dataTag);
  }, [dataTag]);

  useEffect(() => {
    if (searchStringDebounced.trim()) {
      const currentData = originalData.filter((item: any) =>
        item.tag.toLowerCase().includes(searchStringDebounced.toLowerCase())
      );
      setFilteredData(currentData);
    } else {
      setFilteredData(originalData);
    }
  }, [searchStringDebounced]);

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
    <>
      <div className="content-buttons-main-tracking mt-4 mt-3 d-flex justify-content-end">
        <HelpVideo position={8} />
        <div style={{ width: "25%" }} className="ml-2">
          <InputComponent
            // max={5}
            placeholder="Buscar..."
            label=""
            type="text"
            onChange={(e: any) => setSearchString(e)}
          />
        </div>
      </div>
      {filteredData === undefined ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", zIndex: "99999999" }}
        >
          <BeatLoader color="#3997FF" />
        </div>
      ) : (
        <NormalTable
          data={filteredData}
          columns={columnsTag}
          pageSizeOptions={[7, 15, 31]}
          maxBodyHeight={"60vh"}
          pageSize={7}
        />
      )}
    </>
  );
};

export default TagTracking;
