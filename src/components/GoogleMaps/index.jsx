import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function GoogleMaps({ userPosition, businessLocation, google }) {
    const mapStyles = {
        position: 'relative',
        margin: 'auto',
        width: '100%',
        height: '300px',
    };

    return (
        <div style={{ minHeight: '300px' }}>
            <a
                target="_blank"
                href={`https://www.google.com/maps/dir/?api=1&origin=${userPosition.lat},${userPosition.lng}&destination=${businessLocation.lat},${businessLocation.lng}`}
            >
                <Map
                    google={google}
                    containerStyle={{ position: 'relative' }}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{
                        lat: userPosition.lat,
                        lng: userPosition.lng,
                    }}
                >
                    {/* optional in case we want to mark the position of the business */}
                    <Marker
                        position={{
                            lat: businessLocation.lat,
                            lng: businessLocation.lng,
                        }}
                    />
                </Map>
            </a>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(GoogleMaps);
