import React from 'react';
import styled from 'styled-components';
import ReactMapGl, { Marker } from 'react-map-gl';

import PointerIcon from '../../../images/icons/PointerIcon';

import { useAppSelector } from '../../../redux/hooks/hooks';
import { useGetDogParkDetailsQuery } from '../../../redux/reducers/protected-api-slice';

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
    const dogParkModalId = useAppSelector(state => state.app.dogParkModalId);
    const { data: dogParkDetails } = useGetDogParkDetailsQuery({ id: dogParkModalId as number }, { skip: !dogParkModalId });

    const longitude = dogParkDetails?.address?.longitude;
    const latitude = dogParkDetails?.address?.latitude;

    console.log({ dogParkDetails });

    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    if (!token || !longitude || !latitude) return null;

    return (
        <ModalMapContainer>
            <ReactMapGl longitude={longitude} latitude={latitude} zoom={10} mapStyle='mapbox://styles/mapbox/streets-v12' mapboxAccessToken={token}>
                <Marker longitude={longitude} latitude={latitude}>
                    <PointerIcon />
                </Marker>
            </ReactMapGl>
        </ModalMapContainer>
    );
};

export default ModalMap;
