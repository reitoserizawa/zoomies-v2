import React from 'react';
import { IconProps } from '../../states/icon';

const CloseIcon: React.FC<IconProps> = ({ size = '24px', color = '#000' }) => (
    <svg height={size} viewBox='0 -960 960 960' width={size} fill={color}>
        <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
    </svg>
);

export default CloseIcon;
