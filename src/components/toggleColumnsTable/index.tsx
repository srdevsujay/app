import Vector from "../../assets/images/Vector.png";
import "../../styled-components/style.css";
import { useState, useEffect } from "react";

export const ToggleColumnsTable = ({
  columns,
  setDataFunnelToggle,
  setColumnsToSet,
  dataFunnelToggle,
  columnsToSet,
  updateData,
}: any) => {
  // Arrastar estos state al componente principal lead y el toogle esta en columnsToSet---
  // const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([] || null);
  // const [columnsToSet, setColumnsToSet] = useState<any>([]);

  useEffect(() => {
    if (columns) {
      console.log("columns---columns---");
      setDataFunnelToggle(columns);
      // setColumnsToSet(columns);
      updateData(columns);
    }
  }, [columns]);

  const handleColumnToggle = (column: any) => {
    console.log("column", column);
    const isChecked = columnsToSet.find(
      (selectedColumn: any) => selectedColumn.field === column.field
    );

    let newColumns = columnsToSet;
    console.log("isChecked", isChecked);
    if (isChecked) {
      newColumns = columnsToSet.filter(
        (selectedColumn: any) => selectedColumn.field !== column.field
      );
      console.log("newColumns if", newColumns);
    } else {
      newColumns = [...columnsToSet, column];
      console.log("newColumns else", newColumns);
    }
    // setColumnsToSet(newColumns);
    updateData(newColumns);
  };

  return (
    <div className="dropdown mr-2">
      <button
        className="btn dropdown-toggle dropdown-toggle-icon d-flex justify-content-center"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src={Vector} alt="" className="" />
      </button>
      <div
        className="dropdown-menu dropdown-style top-menu-dropdown"
        aria-labelledby="dropdownMenuButton"
      >
        {dataFunnelToggle.map((column: any) => (
          <div key={column.field}>
            <input
              type="checkbox"
              checked={
                !!columnsToSet.find((selectedColumn: any) => {
                  return column ? selectedColumn.field === column.field : false;
                })
              }
              onChange={() => handleColumnToggle(column)}
            />
            <label>{column.field}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
