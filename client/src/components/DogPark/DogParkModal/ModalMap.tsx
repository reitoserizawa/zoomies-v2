import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMapGl, { Marker } from 'react-map-gl';

import PointerIcon from '../../../images/icons/PointerIcon';
import Loader from '../../Loader';

const ModalMapContainer = styled.div`
    width: 200px;
    height: 200px;
    margin: 36px;

    &: .marker {
        width: 50px;
        height: 50px;
    }
`;

const ModalMap: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
    });

    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    return (
        <ModalMapContainer>
            {isLoading && <Loader text='Loading map' $small />}
            <ReactMapGl {...viewport} onLoad={() => setIsLoading(false)} mapStyle='mapbox://styles/mapbox/streets-v12' mapboxAccessToken={token}>
                <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
                    <PointerIcon />
                </Marker>
            </ReactMapGl>
        </ModalMapContainer>
    );
};

export default ModalMap;
