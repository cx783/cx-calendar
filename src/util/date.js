import { startOfMonth, endOfMonth, startOfWeek, isBefore, differenceInDays, addDays, addWeeks } from 'date-fns';

export function daysOnMonth(startDate) {
  const endDate = endOfMonth(startDate);
  const daysOnMonth = differenceInDays(startDate, endDate);

  let days = []; 

  for (let i = 0; i < daysOnMonth; i++) {
    days.push(addDays(startDate, i));
  }

  return days;
}

export function weeksOnMonth(date) {
  const startOfMonthDate = startOfMonth(date);
  const endOfMonthDate = endOfMonth(date);
  
  let start = startOfWeek(startOfMonthDate);
  let weeks = [];

  while (isBefore(start, endOfMonthDate)) {
    weeks.push(daysOnWeek(start));
    start = addWeeks(start, 1);
  }

  return weeks;
}

export function daysOnWeek(startDate) {
  let days = [];
  
  for (let i = 0;  i < 7; i++) {
    days.push(addDays(startDate, i));
  }

  return days;
}
