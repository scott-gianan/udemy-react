import styles from "./styles/Map.module.scss";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCitiesContext } from "../context/CitiesContextProvider";
import { useGeolocation } from "../hooks/useGeolocation";
import useURLPosition from "../hooks/useURLPosition";
import Button from "./Button";
const PHILIPPINES_COORDINATES = [-31.9523, 115.8613];

function Map() {
  //philippine coordinate
  const [mapPosition, setMapPosition] = useState(PHILIPPINES_COORDINATES);
  const { cities } = useCitiesContext();
  const [mapLat, mapLng] = useURLPosition();
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);
  useEffect(() => {
    if (geoLocationPosition) {
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    }
  }, [geoLocationPosition]);
  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use Your Position"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          const { lat, lng } = city.position;
          const coordinates = [lat, lng];
          return (
            <Marker position={coordinates} key={`lat-${lat}-lng${lng}`}>
              <Popup>{city.notes ? city.notes : "No added notes"}</Popup>
            </Marker>
          );
        })}
        <ChangePosition position={mapPosition} />
        <MapClick />
      </MapContainer>
    </div>
  );
}

function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function MapClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
  return null;
}
export default Map;
