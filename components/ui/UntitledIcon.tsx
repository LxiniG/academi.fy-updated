import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { untitledIconPaths, type UntitledIconName } from './untitled-icon-paths';

interface UntitledIconProps {
    name: UntitledIconName;
    size?: number;
    color?: string;
    strokeWidth?: number;
    style?: any;
}

export const UntitledIcon: React.FC<UntitledIconProps> = ({
    name,
    size = 24,
    color = '#000000',
    strokeWidth = 2,
    style,
}) => {
    const pathData = untitledIconPaths[name];

    if (!pathData) {
        console.warn(`UntitledIcon: Icon "${name}" not found`);
        return null;
    }

    return (
        <View style={[{ width: size, height: size }, style]}>
            <Svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d={pathData}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
};
