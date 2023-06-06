export function getStringByResetCycleEnum(resetCycle: string) {
  if (resetCycle === "DAILY") {
    return "매일 1회";
  } else if (resetCycle === "WEEKLY") {
    return "매주 1회";
  } else if (resetCycle === "MONTHLY") {
    return "매달 1회";
  } else {
    return "";
  }
}
