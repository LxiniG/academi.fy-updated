import { useHaptics } from '@/hooks/useHaptics';
import React, { useRef } from 'react';
import { Animated, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Text } from './Typography';

interface ElevatedButtonProps {
    title: string;
    onPress: () => void;
    leftChild?: React.ReactNode;
    style?: any;
    disabled?: boolean;
}

export function ElevatedButton({
    title,
    onPress,
    leftChild,
    style,
    disabled = false
}: ElevatedButtonProps) {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const { triggerLight } = useHaptics();

    const handlePressIn = () => {
        if (disabled) return;
        triggerLight(); // Trigger haptic feedback
        Animated.spring(scaleAnim, {
            toValue: 0.975,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        if (disabled) return;
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePress = () => {
        if (disabled) return;
        onPress();
    };

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            disabled={disabled}
        >
            <Animated.View
                style={[
                    disabled ? styles.buttonDisabled : styles.button,
                    style,
                    {
                        transform: [{ scale: scaleAnim }],
                        opacity: disabled ? 0.6 : 1,
                    }
                ]}
            >
                {leftChild && (
                    <View style={styles.leftChildContainer}>
                        {leftChild}
                    </View>
                )}
                <Text variant={'tagline'} style={disabled ? styles.buttonTextDisabled : styles.buttonText}>
                    {title}
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f8f9fa',
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: '#e9ecef',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    buttonDisabled: {
        backgroundColor: '#e9ecef',
        borderColor: '#dee2e6',
    },
    buttonText: {
        color: '#495057',
        fontWeight: '600',
    },
    buttonTextDisabled: {
        color: '#adb5bd',
    },
    leftChildContainer: {
        marginRight: 8,
    },
});
