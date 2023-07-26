import { useEffect, useState } from "react";

const useMinMaxDateFilter = (dataLead: any) => {
  const [selectedDates, setSelectedDates] = useState<any>([]);
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  console.log("dataLeadHook", dataLead);

  useEffect(() => {
    if (dataLead === undefined && dataLead === 0) return;

    const dataLeads = dataLead.map((lead: any) => {
      return lead.joined || lead.appoiment_date || lead.date;
    });

    const dateObjects = dataLeads.map(
      (dateString: any) => new Date(dateString)
    );

    const sortedDates = dateObjects.sort((a: any, b: any) => a - b);

    setMinDate(sortedDates[0]);
    setMaxDate(sortedDates[sortedDates.length - 1]);
    setSelectedDates([
      {
        startDate: sortedDates[0],
        endDate: sortedDates[sortedDates.length - 1],
        key: "selection",
      },
    ]);
  }, [dataLead]);

  return {
    minDate,
    maxDate,
    selectedDates,
  };
};
export default useMinMaxDateFilter;
