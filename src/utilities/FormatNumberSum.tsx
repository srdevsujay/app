export const FormatNumberSum = ({ price, percentage, name }: any) => {
  const currentSum = price - (percentage / 100) * price;
  const currentPercentSum = price - (price - (percentage / 100) * price);
  console.log("currentSum", currentSum);

  let sumCurr = new Intl.NumberFormat("ES-MX", {
    style: "currency",
    currency: "MXN",
  }).format(currentSum);

  console.log("sum", sumCurr);
  console.log("nameSub", name);

  return (
    <>{name + " " + sumCurr + " Ahorro " + currentPercentSum.toFixed(2)}%</>
  );
};
