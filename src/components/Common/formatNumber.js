export function formatNumber(num) {
  if (num == null) return "0";

  const safeNum = Math.max(0, num); 

  if (safeNum >= 1_000_000) {
    return (
      (safeNum / 1_000_000).toFixed(safeNum >= 10_000_000 ? 0 : 1) + "M"
    );
  }

  if (safeNum >= 1_000) {
    if (safeNum < 10_000) {
      return (safeNum / 1_000).toFixed(1).replace(".0", "") + "k";
    }
    return Math.floor(safeNum / 1_000) + "k";
  }

  return safeNum.toString();
}