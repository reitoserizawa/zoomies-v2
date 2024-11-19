import React from 'react';
import { DogParkState } from '../../states/dog-park';

import { Popup as MapboxPopup } from 'react-map-gl';

interface DogParkPopupProps extends DogParkState {
    showPopup: boolean;
}

const Popup: React.FC<DogParkPopupProps> = () => {
    return <div></div>;
};

export default Popup;
