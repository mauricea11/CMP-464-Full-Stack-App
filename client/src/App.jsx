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

  const points = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.0672, 38.90516896],
        },
        properties: {
          phoneFormatted: "(202) 337-9338",
          phone: "2023379338",
          address: "3333 M St NW",
          city: "Washington DC",
          country: "United States",
          crossStreet: "at 34th St NW",
          postalCode: "20007",
          state: "D.C.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.002583742142, 38.887041080933],
        },
        properties: {
          phoneFormatted: "(202) 547-9338",
          phone: "2025479338",
          address: "221 Pennsylvania Ave SE",
          city: "Washington DC",
          country: "United States",
          crossStreet: "btwn 2nd & 3rd Sts. SE",
          postalCode: "20003",
          state: "D.C.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-76.933492720127, 38.99225245786],
        },
        properties: {
          address: "8204 Baltimore Ave",
          city: "College Park",
          country: "United States",
          postalCode: "20740",
          state: "MD",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.097083330154, 38.980979],
        },
        properties: {
          phoneFormatted: "(301) 654-7336",
          phone: "3016547336",
          address: "4831 Bethesda Ave",
          cc: "US",
          city: "Bethesda",
          country: "United States",
          postalCode: "20814",
          state: "MD",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.359425054188, 38.958058116661],
        },
        properties: {
          phoneFormatted: "(571) 203-0082",
          phone: "5712030082",
          address: "11935 Democracy Dr",
          city: "Reston",
          country: "United States",
          crossStreet: "btw Explorer & Library",
          postalCode: "20190",
          state: "VA",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.10853099823, 38.880100922392],
        },
        properties: {
          phoneFormatted: "(703) 522-2016",
          phone: "7035222016",
          address: "4075 Wilson Blvd",
          city: "Arlington",
          country: "United States",
          crossStreet: "at N Randolph St.",
          postalCode: "22203",
          state: "VA",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-75.28784, 40.008008],
        },
        properties: {
          phoneFormatted: "(610) 642-9400",
          phone: "6106429400",
          address: "68 Coulter Ave",
          city: "Ardmore",
          country: "United States",
          postalCode: "19003",
          state: "PA",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-75.20121216774, 39.954030175164],
        },
        properties: {
          phoneFormatted: "(215) 386-1365",
          phone: "2153861365",
          address: "3925 Walnut St",
          city: "Philadelphia",
          country: "United States",
          postalCode: "19104",
          state: "PA",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-77.043959498405, 38.903883387232],
        },
        properties: {
          phoneFormatted: "(202) 331-3355",
          phone: "2023313355",
          address: "1901 L St. NW",
          city: "Washington DC",
          country: "United States",
          crossStreet: "at 19th St",
          postalCode: "20036",
          state: "D.C.",
        },
      },
    ],
  };

  points.features.forEach(function (point, i) {
    point.properties.id = i;
  });

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
      <div className={"dash"}>
        <Searchbar />
        <div id="search-results"></div>
      </div>
      <div id="maparea" ref={mapContainer} className="map-container"></div>
    </main>
  );
}

export default App;
