import React from 'react';
import { IconProps } from '../../states/icon';

const CheckIcon: React.FC<IconProps> = ({ size = '24px', color = '#000' }) => (
    <svg height={size} viewBox='0 -960 960 960' width={size} fill={color}>
        <path d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
    </svg>
);

export default CheckIcon;
