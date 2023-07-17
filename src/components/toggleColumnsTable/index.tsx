import column_triple from "../../assets/images/column_triple.png";
import "../../styled-components/style.css";
import { useState, useEffect, useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  ContainerDropdown,
  ContainerDropdownFilter,
} from "../../styled-components/button/index";
import { ThemeContext } from "../../utilities/theme/ThemeContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ToggleColumnsTable = ({
  columns,
  setDataFunnelToggle,
  dataFunnelToggle,
  columnsToSet,
  updateData,
}: any) => {
  useEffect(() => {
    if (columns) {
      setDataFunnelToggle(columns);
      console.log("newDataSAlecolumns1", columns);
      updateData(columns);
    }
  }, [columns]);

  const handleColumnToggle = (column: any) => {
    const isChecked = columnsToSet.find(
      (selectedColumn: any) => selectedColumn.field === column.field
    );

    let newColumns = columnsToSet;
    if (isChecked) {
      newColumns = columnsToSet.filter(
        (selectedColumn: any) => selectedColumn.field !== column.field
      );
    } else {
      newColumns = [...columnsToSet, column];
    }
    console.log("newDataSAlecolumns2", newColumns);
    updateData(newColumns);
  };

  const { theme, themeButtonDropdown, themeFilterDropdown } =
    useContext(ThemeContext);

  return (
    <div className="dropdown mr-2 hidden-last-cell">
      <button
        className="btn dropdown-toggle dropdown-toggle-icon d-flex justify-content-center"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src={column_triple} alt="" className="" height="20px" />
      </button>
      <ContainerDropdown
        className="dropdown-menu dropdown-style top-menu-dropdown"
        aria-labelledby="dropdownMenuButton"
        theme={themeButtonDropdown}
      >
        {dataFunnelToggle.map((column: any) => (
          <ContainerDropdownFilter
            key={column.field}
            theme={themeFilterDropdown}
            className="column-container"
          >
            <Checkbox
              {...label}
              checked={
                !!columnsToSet.find((selectedColumn: any) => {
                  return column ? selectedColumn.field === column.field : false;
                })
              }
              onChange={() => handleColumnToggle(column)}
            />
            <label>{column.title}</label>
          </ContainerDropdownFilter>
        ))}
      </ContainerDropdown>
    </div>
  );
};
