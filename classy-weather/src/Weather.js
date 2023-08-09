import React from "react";
import Day from "./Day";
class Weather extends React.Component {
  componentWillUnmount() {
    console.log("weather is unmounting");
  }
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;
    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, index) => {
            return (
              <Day
                key={date}
                date={date}
                max={max.at(index)}
                min={min.at(index)}
                code={codes.at(index)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Weather;
