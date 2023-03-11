import moment from "moment";

export const yesterDay = (xDayInitial: number) => {
  const dayInitial = new Date();
  dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  const dayFinal = new Date();
  const xDayFinal = 1;
  dayFinal.setDate(dayFinal.getDate() - xDayFinal);
  let firstDay = moment(dayInitial).format("YYYY-MM-DD");
  let lastDay = moment(dayFinal).format("YYYY-MM-DD");
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
  const day = new Date().getDay();
  console.log("day", day);
  let dayInitial = new Date();
  if (day == 1) {
    dayInitial.setDate(dayInitial.getDate());
  }
  if (day == 2) {
    const xDayInitial = 1;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  }
  if (day == 3) {
    const xDayInitial = 2;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  }
  if (day == 4) {
    const xDayInitial = 3;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  }
  if (day == 5) {
    const xDayInitial = 4;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  }
  if (day == 6) {
    const xDayInitial = 5;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  }
  if (day == 0) {
    const xDayInitial = 6;
    dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  }
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
