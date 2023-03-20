export function formattTimeZone(date, timeZone) {
  const now = new Date(date);
  let p = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone,
  })
    .formatToParts(now)
    .reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
  const mesActual = new Date(date);
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return `${p.day}-${meses[mesActual.getMonth()].substring(3, 0)}-${p.year} ${
    p.hour
  }:${p.minute} ${p.dayPeriod}`;
  // return `${p.day}-${p.month}-${p.year} ${p.hour}:${p.minute} ${p.dayPeriod}`;
}
