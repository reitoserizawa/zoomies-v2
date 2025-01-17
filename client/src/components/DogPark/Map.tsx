import React, { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled, { createGlobalStyle } from 'styled-components';

import { useGetAllDogParksQuery } from '../../redux/reducers/protected-api-slice';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { setDogParkModalId } from '../../redux/reducers/appSlice';

import DogParkCard from './DogParkCard';
import PointerIcon from '../../images/icons/PointerIcon';
import Loader from '../Loader';

const MapStyles = createGlobalStyle`
    .map {
        width: 100%;
        height: calc(100vh - 138px);
        margin: auto 0;
    }

    .marker {
        width: 50px;
        height: 50px;
    }
`;

const Map: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [popupOpen, setPopupOpen] = useState<{ [key: number]: boolean }>({});
    const [viewport, setViewport] = useState({
        latitude: 40.7127281,
        longitude: -74.0060152,
        zoom: 10
    });

    const dispatch = useAppDispatch();

    const { data } = useGetAllDogParksQuery(null);

    if (!data) return null;

    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    const handleMarkerClick = (id: number) => {
        setPopupOpen(prevState => ({
            [id]: !prevState[id] // Toggle the popup state for the given id
        }));
    };

    return (
        <>
            <div className='map'>
                {isLoading && <Loader text='Loading map' />}
                <ReactMapGl {...viewport} onLoad={() => setIsLoading(false)} mapStyle='mapbox://styles/mapbox/streets-v12' onMove={evt => setViewport(evt.viewState)} mapboxAccessToken={token}>
                    {data.map(dogPark => {
                        if (!dogPark) return null;

                        const id = dogPark.id;
                        const latitude = dogPark?.address?.latitude;
                        const longitude = dogPark?.address?.longitude;

                        if (!id || !latitude || !longitude) return null;

                        return (
                            <div key={id}>
                                <Marker longitude={longitude} latitude={latitude} onClick={() => handleMarkerClick(id)}>
                                    <div style={{ height: '24px', width: '24px' }}>
                                        <PointerIcon />
                                    </div>
                                </Marker>

                                {popupOpen[id] && (
                                    <Popup longitude={longitude} latitude={latitude} anchor='bottom' onClose={() => handleMarkerClick(id)} closeOnClick={false} offset={15}>
                                        <div style={{ margin: '-10px', cursor: 'pointer' }} onClick={() => dispatch(setDogParkModalId(id))}>
                                            <DogParkCard name={dogPark.name} address={dogPark.address} active_check_ins_count={dogPark.active_check_ins_count} most_recent_check_in={dogPark.most_recent_check_in} />
                                        </div>
                                    </Popup>
                                )}
                            </div>
                        );
                    })}
                </ReactMapGl>
            </div>
            <MapStyles />
        </>
    );
};

export default Map;
