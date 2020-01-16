import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

const styles = {
    width: '100%',
    height: '60vh',
};

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function BusinessMap({ userPosition, businesses }) {
    const [map, setMap] = useState(null)
    const [mapOptions, setMapOptions] = useState({
        center:[userPosition.lng, userPosition.lat],
        zoom: 8,
    })
    const mapContainer = useRef(null)

    useEffect(() => {

        const initializeMap = (setMapState, mapContainerRef) => {
            const mapbox = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                ...mapOptions,
            });

            const nearby = businesses.filter(({ distance }) => distance)
                .map(({ lng, lat }) => [lng, lat])

            mapbox.on('load', () => {
                mapbox.resize();

                new mapboxgl.Marker()
                    .setLngLat([userPosition.lng, userPosition.lat])
                    .addTo(mapbox);

                nearby.forEach((coords) => {
                    new mapboxgl.Marker()
                        .setLngLat(coords)
                        .addTo(mapbox);
                })

                setMapState(mapbox);
            });
        };

        if (!map) initializeMap(setMap, mapContainer);

    }, [map]);

    return (
        <div>
            {/* eslint-disable-next-line no-return-assign */}
            <div ref={(el) => (mapContainer.current = el)} style={styles} />
        </div>
    );
}

export default BusinessMap;
