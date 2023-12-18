import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mapboxgl from "mapbox-gl";
import "./App.css";

function App() {
  const [close, setclose] = useState(false);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  mapboxgl.accessToken = process.env.ACCESS_TOKEN_MAPBOX;
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return (
    <main>
      <div className={close ? "dash" : "nothing"}>
        <button onClick={(e) => setclose(!close)}></button>
      </div>
      <div id="maparea" ref={mapContainer} className="map-container"></div>
    </main>
  );
}

export default App;
