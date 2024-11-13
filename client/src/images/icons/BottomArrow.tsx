import React from 'react';
import { IconProps } from '../../states/icon';

const BottomArrow: React.FC<IconProps> = ({ size = '24px', color = '#000' }) => (
    <svg height={size} viewBox='0 -960 960 960' width={size} fill={color}>
        <path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z' />
    </svg>
);

export default BottomArrow;
