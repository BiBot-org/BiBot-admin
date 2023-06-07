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

export function getFormattedDateFromLocalDateTime(localDateTime: string) {
  const date = new Date(localDateTime);
  if (date) {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } else {
    return "";
  }
}

export function getFormattedDateString(date: Date) {
  if (date) {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } else {
    return "";
  }
}
