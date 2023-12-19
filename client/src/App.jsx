import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import mapboxgl from "mapbox-gl";
import "./App.css";
import Searchbar from "./components/Searchbar";

function App() {
  const [close, setclose] = useState(false);
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2piZGpkamQiLCJhIjoiY2xxYTIwcXAyMXRycDJqbnZwcDN1OW1meSJ9.qZVNrmQcecc39OP6IJosjQ";

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
        <Searchbar />
      </div>
      <div id="maparea" ref={mapContainer} className="map-container"></div>
    </main>
  );
}

export default App;
