import { Pnl } from '../pages/Dashboard/models/dashboard.model';

export function groupAndSumDatePNL(bookings: Pnl[]) {
  const groupedBookings: { [key: string]: Pnl } = {};
  bookings.forEach((booking) => {
    const key = `${booking.date}`;
    if (!groupedBookings[key]) {
      groupedBookings[key] = { ...booking };
    } else {
      groupedBookings[key].bookings += booking.bookings;
      groupedBookings[key].gastos += booking.gastos;
      groupedBookings[key].ingresos += booking.ingresos;
      groupedBookings[key].leeds += booking.leeds;
      groupedBookings[key].porcentajerentabilidad +=
        booking.porcentajerentabilidad;
      groupedBookings[key].rentabilidad += booking.rentabilidad;
      groupedBookings[key].roi += booking.roi;
    }
  });

  return Object.values(groupedBookings);
}