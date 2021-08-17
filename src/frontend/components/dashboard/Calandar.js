import React, { useState, useEffect } from "react";

const Calandar = ({ time }) => {
  const [daysInWeek, setDaysInWeek] = useState([]);
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  useEffect(() => {
    //https://medium.com/@quynh.totuan/how-to-get-the-current-week-in-javascript-9e64d45a9a08
    let curr = new Date();
    let week = [];

    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      week.push(first);
    }
    setDaysInWeek(week);
  }, [setDaysInWeek]);

  const now = new Date();
  const today = days[now.getDay()];

  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  var prnDt = new Date().toLocaleTimeString("en-us", options);

  console.log(prnDt);

  return (
    <div className="mx-auto">
      <div className="d-flex flex-row border rounded-3 text-center mx-auto">
        {days.map((day, i) => {
          return (
            <div className="mx-2" key={i}>
              {daysInWeek[i]}
              <br />
              <span className={today === day ? `text-danger` : ""}>{day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calandar;
