import { useEffect, useState } from "react";
import { BackColorsTableOrigin } from "../../../../styled-components/Table/index";
import "../../../../styled-components/Table/style.css";
import venta from "../../../../assets/images/venta.svg";
import click from "../../../../assets/images/click.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InputComponent from "../../../../components/input/Input.component";

const SelectTag = ({ dataLead, setFilteredDataDos }: any) => {
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

  const handleTagChange = (event: any) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    if (tag === "") {
      setFilteredDataDos(dataLead);
    } else {
      const filtered = dataLead.filter((d: any) => d.first_origintag === tag);
      setFilteredDataDos(filtered);
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

  return (
    <div
      style={{
        width: "250px",
        display: "inline-block",
        maxWidth: "250px",
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
      <div className={onFocused ? "d-block onFocused" : "d-none onFocused"}>
        {uniqueTags?.map((tag: any, i: number) => (
          <div style={{ padding: "8px 10px" }} key={i}>
            <BackColorsTableOrigin
              width="initial"
              marginBottom="0px"
              paddingLeft="28%"
              opacity="0.5"
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
              <option key={tag} value={tag} onClick={(e) => handleTagChange(e)}>
                {tag !== null ? tag.substr(1) : null}
              </option>
            </BackColorsTableOrigin>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTag;
