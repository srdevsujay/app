import { getISOWeek } from "date-fns";
import moment from "moment";

export const yesterDay = () => {
  const today = new Date();
  const yesterday = new Date(today.getTime());
  yesterday.setDate(today.getDate() - 1);
  let firstDay = moment(yesterday).format("YYYY-MM-DD");
  let lastDay = moment(yesterday).format("YYYY-MM-DD");
  const dateFormat = {
    fecha_inicial: firstDay,
    fecha_final: lastDay,
  };
  return dateFormat;
};

export const todayDay = () => {
  const dayInitial = new Date();
  dayInitial.setDate(dayInitial.getDate());
  let firstDay = moment(dayInitial).format("YYYY-MM-DD");
  console.log(firstDay);
  const dateFormat = {
    fecha_inicial: firstDay,
    fecha_final: firstDay,
  };
  return dateFormat;
};

export const handleDays = (xDayInitial: number) => {
  const dayInitial = new Date();
  dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  const dayFinal = new Date();
  const xDayFinal = 0;
  dayFinal.setDate(dayFinal.getDate() - xDayFinal);
  let firstDay = moment(dayInitial).format("YYYY-MM-DD");
  let lastDay = moment(dayFinal).format("YYYY-MM-DD");
  const dateFormat = {
    fecha_inicial: firstDay,
    fecha_final: lastDay,
  };
  return dateFormat;
};

export const currentWeek = () => {
  const dateFormat = {
    // .day(0) es para empezar desde el domingo la semana
    fecha_inicial: moment().startOf("week").day(1).format("YYYY-MM-DD"),
    fecha_final: moment().format("YYYY-MM-DD"),
  };
  return dateFormat;
};

export const lastWeek = () => {
  const day = new Date().getDay();
  console.log("day", day);
  let dayInitial = new Date();
  let dayFinal = new Date();
  let xDayInitial = 0;
  let xDayFinal = 0;
  if (day == 1) {
    xDayInitial = 7;
    xDayFinal = 1;
  }
  if (day == 2) {
    xDayInitial = 8;
    xDayFinal = 2;
  }
  if (day == 3) {
    xDayInitial = 9;
    xDayFinal = 3;
  }
  if (day == 4) {
    xDayInitial = 10;
    xDayFinal = 4;
  }
  if (day == 5) {
    xDayInitial = 11;
    xDayFinal = 5;
  }
  if (day == 6) {
    xDayInitial = 12;
    xDayFinal = 6;
  }
  if (day == 0) {
    xDayInitial = 13;
    xDayFinal = 7;
  }
  dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  dayFinal.setDate(dayFinal.getDate() - xDayFinal);
  let firstDay = moment(dayInitial).format("YYYY-MM-DD");
  let lastDay = moment(dayFinal).format("YYYY-MM-DD");
  const dateFormat = {
    fecha_inicial: firstDay,
    fecha_final: lastDay,
  };
  return dateFormat;
};

export const currentMonth = () => {
  const dayInitial = new Date();
  const xDayInitial = new Date();
  dayInitial.setDate(dayInitial.getDate() - xDayInitial.getDate() + 1);
  const dayFinal = new Date();
  const xDayFinal = 0;
  dayFinal.setDate(dayFinal.getDate());
  let firstDay = moment(dayInitial).format("YYYY-MM-DD");
  let lastDay = moment(dayFinal).format("YYYY-MM-DD");
  const dateFormat = {
    fecha_inicial: firstDay,
    fecha_final: lastDay,
  };
  return dateFormat;
};
