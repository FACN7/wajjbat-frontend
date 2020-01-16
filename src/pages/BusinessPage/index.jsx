import React, { useEffect, useState, Fragment } from 'react';

import axios from 'axios';
import './style.scss';
import { FormattedMessage } from 'react-intl';
import { Slide } from '@material-ui/core';
import BusinessDetails from './components/BusinessDetails';
import BusinessReviews from './components/BusinessReviews';
import BusinessPageImageGallery from './components/BusinessPageImageGallery';

export default function BusinessPage(props) {
    const [userPosition, setUserPosition] = useState({});
    const [businessData, setBusinessData] = useState({});
    const [activeTab, setActiveTab] = useState('details');
    const [reviews, setReveiws] = useState('');
    const [refresh, setRefresh] = useState('')

    useEffect(() => {
        (async function getImages() {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL }/api/businesses/${props.match.params.id}`,
            );
            setReveiws(data.reviews);
            setBusinessData(data)
        }());
    }, [props.match.params.id, refresh]);


    useEffect(() => navigator.geolocation.getCurrentPosition(({ coords }) => setUserPosition({ lat: coords.latitude, lng: coords.longitude })), []);


    return (
        <div style={{ minHeight: '100vh' }}>
            {businessData.primaryImage
        && (
            <BusinessPageImageGallery
                defaultMainImage={businessData.primaryImage}
                defaultSubImages={[...businessData.subImages.map(({ url }) => url), businessData.primaryImage]}
            />
        )}


            <nav className="business-page-nav">
                <div className="nav-items">
                    <button className="nav-button" onClick={() => setActiveTab('details')}><FormattedMessage id="Details" /></button>
                    <button className="nav-button" onClick={() => setActiveTab('reviews')}><FormattedMessage id="Reviews" /></button>
                </div>
            </nav>

            <Slide direction="left" in={activeTab === 'details'} mountOnEnter unmountOnExit>
                <div>
                    <BusinessDetails businessData={businessData.details} userPosition={userPosition} />
                </div>
            </Slide>
            <Slide direction="left" in={activeTab === 'reviews'} mountOnEnter unmountOnExit>
                <div>
                    <BusinessReviews refresh={setRefresh} businessData={businessData.details} reviews={reviews} />
                </div>
            </Slide>
        </div>
    );
}
