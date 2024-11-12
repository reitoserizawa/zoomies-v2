import React from 'react';
import { IconProps } from '../../interfaces/icon';

const RightArrow: React.FC<IconProps> = ({ size = '24px', color = '#000' }) => (
    <svg height={size} viewBox='0 -960 960 960' width={size} fill={color}>
        <path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
    </svg>
);

export default RightArrow;
