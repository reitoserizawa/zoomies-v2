import React from 'react';
import { IconProps } from '../../interfaces/icon';

const AddIcon: React.FC<IconProps> = ({ size = '24px', color = '#000' }) => (
    <svg height={size} viewBox='0 -960 960 960' width={size} fill={color}>
        <path d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' />
    </svg>
);

export default AddIcon;
