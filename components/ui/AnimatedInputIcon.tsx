import { useHaptics } from '@/hooks/useHaptics';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { UntitledIcon } from './UntitledIcon';

interface AnimatedInputIconProps {
    isEmail: boolean;
    color?: string;
    size?: number;
}

export const AnimatedInputIcon: React.FC<AnimatedInputIconProps> = ({
    isEmail,
    color = '#6B7280',
    size = 20,
}) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const opacityAnim = useRef(new Animated.Value(1)).current;
    const previousIsEmailRef = useRef(isEmail);

    const { triggerLight } = useHaptics();

    useEffect(() => {
        if (previousIsEmailRef.current !== isEmail) {
            triggerLight();
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(scaleAnim, {
                        toValue: 0.8,
                        duration: 100,
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacityAnim, {
                        toValue: 0.6,
                        duration: 100,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacityAnim, {
                        toValue: 1,
                        duration: 150,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();

            previousIsEmailRef.current = isEmail;
        }
    }, [isEmail, scaleAnim, opacityAnim]);

    return (
        <Animated.View
            style={{
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
            }}
        >
            {isEmail ? (
                <UntitledIcon
                    name="mail-01"
                    size={size}
                    color={color}
                    strokeWidth={2}
                />
            ) : (
                <UntitledIcon
                    name="user-01"
                    size={size}
                    color={color}
                    strokeWidth={2}
                />
            )}
        </Animated.View>
    );
};
