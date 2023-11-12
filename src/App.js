import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Time Travel</h1>
      <div class="container">
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
                  Last updated at <span id="date"></span>
                </li>
                <li id="description"></li>
              </ul>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="outdoorfix weather-temperature">
                  <img src="" alt="outdoor" id="icon" class="float-left" />
                  <div class="float-left">
                    <strong id="temperature"></strong>
                    <span class="units">&degF</span>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span> %
                  </li>
                  <li>
                    Wind: <span id="wind"></span> mph
                  </li>
                </ul>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>

          <small>
            <a href="https://github.com/soniqmidd/TimeTravel" target="_blank">
              Open Source code
            </a>
            by Sonique Middleton
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
