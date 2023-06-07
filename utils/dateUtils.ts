export function NextChangeableDate(
  resetCycle: string,
  endDate: string
): number {
  let nextDate = new Date(endDate);
  let delta = 0;
  if (resetCycle === "DAILY") {
    delta = 1;
  } else if (resetCycle === "WEEKLY") {
    delta = 7;
  } else if (resetCycle === "MONTHLY") {
    delta = 30;
  }

  return nextDate.setDate(nextDate.getDate() + delta);
}

export function formatLocalDate(date: Date): string {
  return `${date.getFullYear()} 년  ${date.getMonth()} 월 ${date.getDay()} 일`;
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

export function getFormattedDateTimeFromLocalDateTime(localDateTime: string) {
  const date = new Date(localDateTime);
  if (date) {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } else {
    return "";
  }
}

export function calculateThreeMonthAgo(date: number) {
  const now = new Date(date);
  const newDate = now.setMonth(now.getMonth() - 3);
  return newDate;
}
