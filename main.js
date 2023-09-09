const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTime = currentDate.getTime();

document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day: ${currentDayOfWeek}`;
document.querySelector(
  '[data-testid="currentUTCTime"]'
).textContent = `Current UTC Time: ${currentUTCTime} ms`;
