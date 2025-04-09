import { useEffect, useState } from 'react';
import MapView from './MapView';
import './Location.css';

function Location() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setLocationError(null);
      },
      error => {
        console.error('Error getting location:', error);
        setLocationError('Location access is required to find nearby hospitals and pharmacies.');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <div className="location-page">
      <div className="location-container">
        <h2 className="location-title">Hospital & Pharmacy Locator</h2>
        
        {locationError ? (
          <div className="location-error">
            <p>{locationError}</p>
            <button 
              className="retry-button"
              onClick={() => {
                window.location.reload();
              }}
            >
              Allow Location Access
            </button>
          </div>
        ) : lat && lon ? (
          <MapView latitude={lat} longitude={lon} />
        ) : (
          <div className="loading-container">
            <p>Fetching your location...</p>
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Location;
