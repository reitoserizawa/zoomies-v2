import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { DogParkState } from '../../states/dog-park';
import { createGlobalStyle } from 'styled-components';

import pin from '../../images/pointer.svg';
import { useGetAllDogParksQuery } from '../../redux/reducers/protected-api-slice';
import DogParkCard from './DogParkCard';

const MapStyles = createGlobalStyle`
.map {
  width: 100%;
  height: calc(100vh - 138px);
  margin: auto 0;

  .marker {
    width: 50px;
    height: 50px;
  }
}

@media only screen and (max-width: 700px) {
  .map {
    margin-bottom: 2em;
  }
}
`;

const Mapping: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState<{ [key: number]: boolean }>({});
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
    });
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
                <Map {...viewport} mapStyle='mapbox://styles/mapbox/streets-v12' onMove={evt => setViewport(evt.viewState)} mapboxAccessToken={token}>
                    {data.map(dogPark => {
                        if (!dogPark) return null;

                        const id = dogPark.id;
                        const geoArray = dogPark.geo;

                        if (!id || !geoArray) return null;

                        return (
                            <div key={id}>
                                <Marker longitude={geoArray[0]} latitude={geoArray[1]} onClick={() => handleMarkerClick(id)}>
                                    <img src={pin} alt='pin' />
                                </Marker>

                                {popupOpen[id] && (
                                    <Popup longitude={geoArray[0]} latitude={geoArray[1]} anchor='bottom' onClose={() => handleMarkerClick(id)} closeOnClick={false} offset={15}>
                                        <div style={{ margin: '-10px' }}>
                                            <DogParkCard name={dogPark.name} address={dogPark.address}></DogParkCard>
                                        </div>
                                    </Popup>
                                )}
                            </div>
                        );
                    })}
                </Map>
            </div>
            <MapStyles />
        </>
    );
};

export default Mapping;
