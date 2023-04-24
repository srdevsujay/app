import { useEffect, useState } from "react";
import { DataType } from '../models/dashboard.model';

export const useData = (initialData: DataType[]) => {
  const [data, setData] = useState<DataType[]>(initialData);

  useEffect(() => {
    const newData = data.reduce((acc, item) => {
      const found = acc.find(elem => elem.ct === item.ct);
      if (found) {
        found.bookings += item.bookings;
        found.gastos += item.gastos;
        found.ingresos += item.ingresos;
        found.leeds += item.leeds;
        found.porcentajerentabilidad += item.porcentajerentabilidad;
        found.rentabilidad += item.rentabilidad;
        found.roi += item.roi;
      } else {
        acc.push({
          ...item,
        });
      }
      return acc;
    }, [] as DataType[]);

    setData(newData);
  }, [data]);

  return data;
};