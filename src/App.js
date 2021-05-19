import React from "react";
import Map from "./Map";

const App = () => {
  return (
    <>
      <Map />
      <div id="tile-attribution">
        Map tiles by <a href="http://stamen.com">Stamen Design</a>, under{" "}
        <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data
        by <a href="http://openstreetmap.org">OpenStreetMap</a>, under{" "}
        <a href="http://www.openstreetmap.org/copyright">ODbL</a>.
      </div>
    </>
  );
};

export default App;
