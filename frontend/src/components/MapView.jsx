import React, { useEffect, useState } from 'react';
import './MapView.css';

function MapView({ latitude, longitude }) {
  const [hospitals, setHospitals] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch nearby hospitals and pharmacies
    const fetchNearbyPlaces = async () => {
      try {
        setLoading(true);
        // In a real app, you would make API calls to services like Google Places API
        // For this example, we'll use mock data
        
        // Simulate API call delay
        setTimeout(() => {
          // Mock data for hospitals
          const mockHospitals = [
            { id: 1, name: 'General Hospital', distance: '0.8 km', address: '123 Health St' },
            { id: 2, name: 'City Medical Center', distance: '1.2 km', address: '456 Care Ave' },
            { id: 3, name: 'Community Hospital', distance: '2.5 km', address: '789 Wellness Blvd' }
          ];
          
          // Mock data for pharmacies
          const mockPharmacies = [
            { id: 1, name: 'MedPlus Pharmacy', distance: '0.5 km', address: '321 Medicine Rd' },
            { id: 2, name: 'Health Essentials', distance: '1.0 km', address: '654 Remedy St' },
            { id: 3, name: '24/7 Pharmacy', distance: '1.8 km', address: '987 Cure Lane' }
          ];
          
          setHospitals(mockHospitals);
          setPharmacies(mockPharmacies);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error fetching nearby places:', error);
        setLoading(false);
      }
    };

    if (latitude && longitude) {
      fetchNearbyPlaces();
    }
  }, [latitude, longitude]);

  return (
    <div className="map-container">
      <div className="map-header">
        <h3>Your Location</h3>
        <p>Latitude: {latitude.toFixed(6)}, Longitude: {longitude.toFixed(6)}</p>
      </div>
      
      <div className="map-view">
        {/* In a real app, you would integrate a map library like Google Maps or Leaflet here */}
        <div className="map-placeholder">
          <p>Map View</p>
          <p>Your current location is marked here</p>
        </div>
      </div>
      
      <div className="nearby-places">
        <div className="places-section">
          <h3>Nearby Hospitals</h3>
          {loading ? (
            <p>Loading hospitals...</p>
          ) : (
            <ul className="places-list">
              {hospitals.map(hospital => (
                <li key={hospital.id} className="place-item">
                  <div className="place-name">{hospital.name}</div>
                  <div className="place-details">
                    <span className="place-distance">{hospital.distance}</span>
                    <span className="place-address">{hospital.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="places-section">
          <h3>Nearby Pharmacies</h3>
          {loading ? (
            <p>Loading pharmacies...</p>
          ) : (
            <ul className="places-list">
              {pharmacies.map(pharmacy => (
                <li key={pharmacy.id} className="place-item">
                  <div className="place-name">{pharmacy.name}</div>
                  <div className="place-details">
                    <span className="place-distance">{pharmacy.distance}</span>
                    <span className="place-address">{pharmacy.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default MapView;
