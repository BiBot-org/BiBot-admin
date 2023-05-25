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
  console.log(date);
  console.log(date.toLocaleString());
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  return `${date.getFullYear()} 년  ${date.getMonth()} 월 ${date.getDay()} 일`;
}
