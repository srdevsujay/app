export const FormatNumberSum = ({ price, percentage, name }: any) => {
  const currentSum = price - (percentage / 100) * price;
  const currentPercentSum = price - (price - (percentage / 100) * price);
  console.log("currentSum", currentSum);

  let sumCurr = new Intl.NumberFormat("ES-MX", {
    style: "currency",
    currency: "MXN",
  }).format(currentSum);

  let sumCurrX = new Intl.NumberFormat("ES-MX", {
    style: "currency",
    currency: "MXN",
  }).format(currentPercentSum);

  return <>{name + " " + sumCurr + " Ahorro " + sumCurrX}</>;
};
