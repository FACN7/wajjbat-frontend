import React, { useEffect, useState } from 'react';

import './style.scss';

import Filtering from '../Filtering';

export default function Footer({ lang, filterByType, filterByCuisine }) {
    const [hideFooter, setHideFooter] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const sideBarHandler = () => {
        setShowSideBar(!showSideBar);
    };

    useEffect(() => {
        let prevScrollPosition = window.pageYOffset;
        window.onscroll =  () => {
            const currentScrollPosition = window.pageYOffset;
            if (prevScrollPosition > currentScrollPosition) {
                // if he scrolls up show the filter icon
                setHideFooter(false);
            } else {
                // when the user scrolls down hide the filter icon
                setHideFooter(true);
            }
            prevScrollPosition = currentScrollPosition;
        };
    }, []);


    return (
        <div
            className="footer"
            id="footer"
            // style={{
            //     bottom: hideFooter ? '-100px' : '0',
            // }}
        >
            <div className="filter" onClick={sideBarHandler} role="">
                <img
                    className="filterIcon"
                    src={require('./filterIcon.svg')}
                    alt=""
                    style={{ maxWidth: '30px' }}
                />
            </div>

            <div
                className="overlay"
                onClick={sideBarHandler}
                style={{
                    right: showSideBar ? '0px' : '-100%',
                }}
            >
                <div
                    className="sideBar"
                    id="sideBar"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="sideBarHider"
                        style={{ float: 'left' }}
                        onClick={sideBarHandler}
                    >
            ×
                    </button>

                    <Filtering
                        filterByTypeHandler={filterByType}
                        filterByCuisineHandler={filterByCuisine}
                        setShowSideBar={setShowSideBar}
                    />
                </div>
            </div>
        </div>
    );
}
