import { AppThunk } from "../../../store";
import { setLeads, starLoading } from "./contactsSlice";
import { getDataLeads } from "../../../../pages/Lead/services/index";
import _ from "lodash";

export const obtainApiContacts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataLeads();
      console.log("resultPnl", result);
      const currentDataLead: any = _.orderBy(result.data.data, "id", "desc");
      dispatch(setLeads(currentDataLead));
    } catch (error) {
      console.log(error);
    }
  };
};
