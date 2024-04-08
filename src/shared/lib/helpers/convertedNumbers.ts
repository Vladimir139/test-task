export const numberWithSpaces = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const numberWithComma = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatNumber = (num: number): string => {
  if (Math.abs(num) < 1000) {
    return num.toString();
  }
  if (Math.abs(num) < 1000000) {
    const formattedNum = (num / 1000).toFixed(1);
    return formattedNum.endsWith(".0") ? `${formattedNum.slice(0, -2)}K` : `${formattedNum}K`;
  }
  const formattedNum = (num / 1000000).toFixed(1);
  return formattedNum.endsWith(".0") ? `${formattedNum.slice(0, -2)}M` : `${formattedNum}M`;
};
