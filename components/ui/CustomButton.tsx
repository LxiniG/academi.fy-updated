import { useHaptics } from '@/hooks/useHaptics';
import React, { useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { Text } from './Typography';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    showArrow?: boolean;
    variant?: 'light' | 'dark';
    style?: any;
}

export function CustomButton({ title, onPress, showArrow = true, variant = 'light', style }: CustomButtonProps) {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const { triggerLight } = useHaptics();

    const handlePressIn = () => {
        triggerLight(); // Trigger haptic feedback
        Animated.spring(scaleAnim, {
            toValue: 0.975,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePress = () => {
        onPress();
    };

    const buttonStyle = variant === 'dark' ? styles.buttonDark : styles.button;
    const textStyle = variant === 'dark' ? styles.buttonTextDark : styles.buttonText;
    const arrowColor = variant === 'dark' ? '#FFFFFF' : '#000000';

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
        >
            <Animated.View
                style={[
                    buttonStyle,
                    style,
                    { transform: [{ scale: scaleAnim }] }
                ]}
            >
                <Text variant="body1Bold" style={textStyle}>
                    {title}
                </Text>
                {showArrow && (
                    <View style={styles.arrowContainer}>
                        <IconSymbol size={20} name="arrow.right" color={arrowColor} />
                    </View>
                )}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'rgba(186, 186, 186, 1)', // White border with 30% transparency
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDark: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)', // White border with 30% transparency
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000000',
        textAlign: 'center',
    },
    buttonTextDark: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    arrowContainer: {
        marginLeft: 8,
    },
});
