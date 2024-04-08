export const convertedSalaryPeriod = (
  period: "hour" | "day" | "week" | "month" | "year" | "deal" | "none",
) => {
  if (period === "hour") {
    return "час";
  }
  if (period === "day") {
    return "день";
  }
  if (period === "week") {
    return "нед";
  }
  if (period === "month") {
    return "мес";
  }
  if (period === "deal") {
    return "сделка";
  }
  if (period === "year") {
    return "год";
  }

  return "";
};
