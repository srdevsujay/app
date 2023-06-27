import { useContext, useEffect, useState } from "react";
import { BackColorsTableOrigin } from "../../../../styled-components/Table/index";
import "../../../../styled-components/Table/style.css";
import venta from "../../../../assets/images/venta.svg";
import click from "../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InputComponent from "../../../../components/input/Input.component";
import { OnFocused } from "../../styled-components/customerDetail.Styled";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import _ from "lodash";

const SelectTag = ({
  dataLead,
  setFilteredDataDos,
  clearFilterContacts,
}: any) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [currentSelectedTag, setCurrentSelectedTag] = useState<any>();

  const uniqueTags = currentSelectedTag?.reduce((acc: any, cur: any) => {
    // console.log("acc", acc.length);
    // console.log("cur.first_origintag", cur.first_origintag);
    if (!acc.includes(cur.first_origintag)) {
      acc.push(cur.first_origintag);
    }
    return acc;
  }, []);

  const handleTagChange = (tag: string) => {
    console.log("tag...", tag);
    setSelectedTag(tag);
    if (tag === "") {
      const sortedDataLead = dataLead.sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      console.log("sortedLead 1", sortedDataLead);

      const currentDateSale = _.orderBy(dataLead, "date", "desc");
      setFilteredDataDos(sortedDataLead);
    } else {
      const filtered = dataLead.filter((d: any) => d.first_origintag === tag);
      const currentDateSale = _.orderBy(filtered, "date", "desc");
      const sortedDataFiltered = filtered.sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      console.log("sortedLead 2", sortedDataFiltered);
      setFilteredDataDos(sortedDataFiltered);
    }
    setOnFocused(0);
  };

  const handleSearchChange = (event: any) => {
    const query = event.toLowerCase();
    const filtered = dataLead.filter(
      (d: any) => d.email.toLowerCase().includes(query)
      // d.first_origintag.toLowerCase().includes(query) ||
      // d.last_origentag?.toLowerCase().includes(query) ||
      // d.name.toLowerCase().includes(query) ||
      // d.phone.toLowerCase().includes(query)
    );
    setFilteredDataDos(filtered);
  };

  const [onFocused, setOnFocused] = useState(0);
  const toggleSelectTag = (e: any) => {
    setTimeout(() => {
      setOnFocused(0);
    }, 90);
  };

  useEffect(() => {
    if (!dataLead) return;
    const currentDataLead = dataLead.filter(
      (data: any) => data.first_origintag !== null
    );
    setCurrentSelectedTag(currentDataLead);
  }, [dataLead]);

  // useEffect(() => {
  //   if (!dataLead) return;
  //   setFilteredDataDos(dataLead);
  // }, [dataLead]);

  // useEffect(() => {
  //   console.log("filteredDataDos", filteredDataDos);
  //   handleFilteredData(filteredDataDos);
  // }, [filteredDataDos]);

  const { theme } = useContext(ThemeContext);
  console.log("selectedTag--", selectedTag === "");

  const clearFilter = () => {
    setSelectedTag("");
    clearFilterContacts();
  };
  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
      }}
    >
      <InputComponent
        type="text"
        onChange={handleSearchChange}
        placeholder="Buscar..."
        onFocus={(e) => setOnFocused(1)}
        onBlur={(e) => toggleSelectTag(e)}
        className="w-100"
      />
      <div
        className={
          selectedTag === "" ? "d-none mt-2 mb-2" : "d-block mt-2 mb-2"
        }
        onClick={clearFilter}
      >
        <div className="custom-div"></div>
        <BackColorsTableOrigin
          width="initial"
          marginBottom="0px"
          paddingLeft="0"
          opacity="0.5"
          justifyContent="center"
          className={`${
            selectedTag?.substr(0, 1) === "@"
              ? "back-lila"
              : selectedTag?.substr(0, 1) === "!"
              ? "back-orange"
              : "back-green"
          }`}
        >
          {selectedTag?.substr(0, 1) === "@" ? (
            <img src={click} alt="" className="iconos-table-origin" />
          ) : selectedTag?.substr(0, 1) === "!" ? (
            <CheckCircleOutlinedIcon
              style={{
                color: "#F08303",
                fontSize: "17px",
                marginTop: "2px",
                marginRight: "4px",
              }}
            />
          ) : (
            <img src={venta} alt="" className="iconos-table-origin" />
          )}
          <option key={selectedTag} value={selectedTag}>
            {selectedTag !== null ? selectedTag?.substr(1) : null}
          </option>
        </BackColorsTableOrigin>
      </div>
      <OnFocused className={onFocused ? "d-block" : "d-none"} theme={theme}>
        {uniqueTags?.map((tag: any, i: number) => (
          <div
            style={{ padding: "8px 10px" }}
            key={i}
            onClick={(e: any) => {
              handleTagChange(tag);
              e.stopPropagation();
            }}
          >
            <BackColorsTableOrigin
              width="initial"
              marginBottom="0px"
              paddingLeft="0"
              opacity="0.5"
              justifyContent="center"
              className={`${
                tag?.substr(0, 1) === "@"
                  ? "back-lila"
                  : tag?.substr(0, 1) === "!"
                  ? "back-orange"
                  : "back-green"
              }`}
            >
              {tag?.substr(0, 1) === "@" ? (
                <img src={click} alt="" className="iconos-table-origin" />
              ) : tag?.substr(0, 1) === "!" ? (
                <CheckCircleOutlinedIcon
                  style={{
                    color: "#F08303",
                    fontSize: "17px",
                    marginTop: "2px",
                    marginRight: "4px",
                  }}
                />
              ) : (
                <img src={venta} alt="" className="iconos-table-origin" />
              )}
              <option key={tag} value={tag}>
                {tag !== null ? tag?.substr(1) : null}
              </option>
            </BackColorsTableOrigin>
          </div>
        ))}
      </OnFocused>
    </div>
  );
};

export default SelectTag;
