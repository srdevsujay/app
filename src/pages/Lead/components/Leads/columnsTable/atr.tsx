import { formattTimeZone } from "../../../../../utilities/FormattTimeZone";

export const joinedColumn = (time_Zone: string) => {
  return {
    title: "SE UNIO EL...",
    field: "joined",
    render: (dataContacts: any) => (
      <div className="widthDateLead">
        <span
          className="font-HelveticaNeueL etiquetaA span-width-table"
          // onClick={() => dispatch(obtainUserProfile(dataContacts.email))}
        >
          {formattTimeZone(dataContacts?.joined, time_Zone)}
        </span>
      </div>
    ),
  };
};
