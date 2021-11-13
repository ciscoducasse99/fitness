import React, { useState, useEffect } from "react";

const Calandar = ({ time }) => {
  const [daysInWeek, setDaysInWeek] = useState([]);
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  useEffect(() => {
    //https://medium.com/@quynh.totuan/how-to-get-the-current-week-in-javascript-9e64d45a9a08
    let curr = new Date();
    let week = [];

    console.log(curr.getDay());
    for (let i = 0; i <= 6; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      week.push(first);
    }

    setDaysInWeek(week);
    // https://stackoverflow.com/questions/9100676/how-to-get-the-last-day-of-the-previous-month-in-javascript-or-jquery/37803823
    // this sets the date to the last day of the month
  }, [setDaysInWeek]);

  const now = new Date();
  const today = days[now.getDay()];

  return (
    // I need to add a time picker
    <div className="d-flex flex-row border rounded-3 p-1 hover">
      {days.map((day, i) => {
        return (
          <div
            key={i}
            className={today === day ? `text-danger mx-auto` : "mx-auto"}
          >
            <span>{daysInWeek[i]}</span>
            <br />
            <span>{day}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Calandar;
