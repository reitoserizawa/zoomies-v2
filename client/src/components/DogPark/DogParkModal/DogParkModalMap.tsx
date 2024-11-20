import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMapGl, { Marker } from 'react-map-gl';

import PointerIcon from '../../../images/icons/PointerIcon';

const ModalMapContainer = styled.div`
    width: 200px;
    height: 200px;
    margin: 36px;

    &: .marker {
        width: 50px;
        height: 50px;
    }
`;

const DogParkModalMap: React.FC = () => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
    });

    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    return (
        <ModalMapContainer>
            <ReactMapGl {...viewport} mapStyle='mapbox://styles/mapbox/streets-v12' mapboxAccessToken={token}>
                <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
                    <PointerIcon />
                </Marker>
            </ReactMapGl>
        </ModalMapContainer>
    );
};

export default DogParkModalMap;
