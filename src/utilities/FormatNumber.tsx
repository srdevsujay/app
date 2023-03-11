export const FormatNumber = ({ number }: any) => {
  return (
    <>
      {new Intl.NumberFormat("ES-MX", {
        style: "currency",
        currency: "MXN",
      }).format(number)}
    </>
  );
};
