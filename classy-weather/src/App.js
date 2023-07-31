import React from "react";
import Weather from "./Weather";
import { convertToFlag } from "./starter";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      isLoading: false,
      displayLocation: "",
      weather: {},
      error: "",
    };
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  onChangeLocation(e) {
    this.setState({ location: e.target.value });
  }
  async fetchWeather() {
    try {
      this.setState({ isLoading: true, error: "" });
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      //console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      console.log(weatherData);
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false, location: "" });
    }
  }
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="search of location..."
            value={this.state.location}
            onChange={this.onChangeLocation}
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather</button>
        {this.state.error && <p className="loader">{this.state.error}</p>}
        {this.state.isLoading && <p className="loader">Loading...</p>}
        {this.state.weather.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.displayLocation}
          />
        )}
      </div>
    );
  }
}

export default App;
