import React from 'react';
import './DatePicker.css';
class DatePicker extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="calendar">
        <input type="text" className="calendar-input"/>
        <DatePanel/>
      </div>
    );
  }
}

const bigMonth = [1, 3, 5, 7, 8, 10, 12];
const smallMonth = [4, 6, 9, 11];

function getPrevMonth (month) {
  if (month !== 1) {
    return month - 1;
  } else {
    return 12;
  }
}

function getNextMonth (month) {
  if (month !== 12) {
    return month + 1;
  } else {
    return 1;
  }
}

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
function getMonthDays(month, year) {
  console.log(month);
  if (bigMonth.indexOf(month) >= 0) {
    return 31;
  } else if (smallMonth.indexOf(month >= 0)) {
    return 30;
  } else {
    if (isLeapYear(year)) {
      return 29;
    } else {
      return 28;
    }
  }
}
function DatePanel(props) {
  let curDate = new Date();
  let curYear = curDate.getFullYear();
  let curMonth = curDate.getMonth() + 1;
  let prevMonth = getPrevMonth(curMonth);
  let nextMonth = getNextMonth(curMonth);
  let curDay = curDate.getDay();
  let dateString = `${curYear}-${curMonth}-1`;
  let firstDate = Date.parse(dateString);
  let firstDay = new Date(firstDate).getDay();
  let totalDays = [];
  let start = getMonthDays(prevMonth, curYear);
  let curTotalDays = getMonthDays(curMonth, curYear);
  if (firstDay === 0) {
    firstDay = 7;
  }
  for (let i = 0; i < firstDay - 1; i++) {
    totalDays.unshift(start--);
  }
  for (let i = 1; i <= curTotalDays; i++) {
    totalDays.push(i);
  }
  console.log(totalDays);
  return (
    <div className={`calendar-panel`}>
      <div className="calendar-title">
        <div className="left-btn">left</div>
        <div className="title">
          {`${curYear} 年 ${curMonth} 月`}
        </div>
        <div className="right-btn">right</div>
      </div>
    </div>
  )
}


export default DatePicker;