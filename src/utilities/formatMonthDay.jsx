export function formatMonthDay(date) {

  if (typeof date === "string") {
    const now = new Date(date);

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
    let p = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      date,
    })
      .formatToParts(now)
      .reduce((acc, part) => {
        acc[part.type] = part.value;
        return acc;
      }, {});
    return `${p.day}-${meses[mesActual.getMonth()].substring(3, 0)}-${p.year}`;
  } else {
    const dataMap = date.map((item) => {
      const now = new Date(item);
      const mesActual = new Date(item);
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
      let p = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        item,
      })
        .formatToParts(now)
        .reduce((acc, part) => {
          acc[part.type] = part.value;
          return acc;
        }, {});
      return `${meses[mesActual.getMonth()].substring(3, 0)}-${p.day}`;
    });
    return dataMap;
  }
}
