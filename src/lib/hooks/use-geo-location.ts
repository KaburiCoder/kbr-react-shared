import { useState, useEffect, useCallback } from 'react';

export interface GeoLocation {
  lat: number;
  lng: number;
}

export const useGeoLocation = () => {
  const [location, setLocation] = useState<GeoLocation>({
    lat: 35.842176,
    lng: 127.1253563,
  });

  const updateLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    updateLocation();
  }, [updateLocation]);

  return { location, updateLocation };
};