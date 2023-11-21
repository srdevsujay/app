import { Select } from "../../../../../styled-components/select/index";
import { stateBooking } from "../../../models/routes";

export const stateColumn = (
  dataContacts: any,
  onChangeStatus: any,
  themeState: any
) => {
  return {
    title: "Estado",
    field: "status",
    render: (dataBooking: any) => (
      <div className="widthDateLead">
        <Select
          onChange={(e) => onChangeStatus(e, dataBooking)}
          value={dataBooking.status}
          theme={themeState}
        >
          {stateBooking.map((option: any, i = 1) => (
            <option key={i} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
      </div>
    ),
  };
};
