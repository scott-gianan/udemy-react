import React from "react";
import { formatDay, getWeatherIcon } from "./starter";
class Day extends React.Component {
  render() {
    const { date, max, min, code } = this.props;
    const isToday = formatDay(Date.now()) === formatDay(date);
    return (
      <li className={`day ${isToday ? "important" : ""}`}>
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; {Math.max(max)}&deg;
        </p>
      </li>
    );
  }
}
export default Day;
