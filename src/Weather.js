import React from "react";
import "./style.css";

export default function Weather() {
  return (
    <div class="Weather">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form id="search-form" class="mb-3">
            <div class="row">
              <div class="col-6">
                <input
                  type="search"
                  placeholder="Search a city .."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                  autoFocus="on"
                />
              </div>

              <div class="col-3">
                <input
                  type="submit"
                  value="Submit"
                  class="btn btn-primary w-100"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Current"
                  class="btn btn-secondary w-100"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <h2 id="city"></h2>
            <ul>
              <li>
                <span id="date">Last updated Wednesday at 08:38</span>
              </li>
              <li>
                <span>Clear Sky</span>
              </li>
              <li id="description"></li>
            </ul>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="outdoorfix weather-temperature">
                <img
                  src="	https://openweathermap.org/img/wn/01d@2x.png"
                  alt="outdoor"
                  id="icon"
                  class="float-left"
                />
                <div class="float-left">
                  <strong id="temperature">60</strong>
                  <span class="units">°F</span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <ul>
                <li>Humidity: 91%</li>
                <li>Wind: 21 mph</li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast">
            <ul>
              <li>
                Thu
                <img src="https://openweathermap.org/img/wn/04d@2x.png" /> 68°F
              </li>

              <li>
                Fri
                <img src="https://openweathermap.org/img/wn/04d@2x.png" /> 77°F
              </li>

              <li>
                Sat
                <img src="https://openweathermap.org/img/wn/02d@2x.png" /> 78°F
              </li>

              <li>
                Sun
                <img src="https://openweathermap.org/img/wn/10d@2x.png" /> 77°F
              </li>

              <li>
                Mon
                <img src="https://openweathermap.org/img/wn/10d@2x.png" /> 83°F
              </li>

              <li>
                Tue
                <img src="https://openweathermap.org/img/wn/10d@2x.png" /> 72°F
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
