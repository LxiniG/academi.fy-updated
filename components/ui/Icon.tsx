import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { UntitledIcon } from './UntitledIcon';
import { type UntitledIconName } from './untitled-icon-paths';

type IoniconsName = keyof typeof Ionicons.glyphMap;

interface IconProps {
    // Untitled UI icons
    untitled?: UntitledIconName;
    // Ionicons
    ionicon?: IoniconsName;

    // Common props
    size?: number;
    color?: string;
    strokeWidth?: number;
    style?: any;
}

/**
 * Universal Icon component that supports both Untitled UI icons and Ionicons
 * 
 * Usage:
 * <Icon untitled="arrow-right" size={24} color="#000" />
 * <Icon ionicon="chevron-forward" size={24} color="#000" />
 */
export const Icon: React.FC<IconProps> = ({
    untitled,
    ionicon,
    size = 24,
    color = '#000000',
    strokeWidth = 2,
    style,
}) => {
    if (untitled) {
        return (
            <UntitledIcon
                name={untitled}
                size={size}
                color={color}
                strokeWidth={strokeWidth}
                style={style}
            />
        );
    }

    if (ionicon) {
        return (
            <Ionicons
                name={ionicon}
                size={size}
                color={color}
                style={style}
            />
        );
    }

    console.warn('Icon: No icon type specified. Use either "untitled" or "ionicon" prop.');
    return null;
};
