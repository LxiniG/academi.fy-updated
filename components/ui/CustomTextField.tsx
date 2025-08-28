import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

interface CustomTextFieldProps extends TextInputProps {
    style?: any;
    leftIcon?: React.ReactNode;
}

export function CustomTextField({ style, leftIcon, ...props }: CustomTextFieldProps) {
    return (
        <View style={[styles.container, style]}>
            {leftIcon && (
                <View style={styles.leftIconContainer}>
                    {leftIcon}
                </View>
            )}
            <TextInput
                style={[
                    styles.textField,
                    leftIcon ? styles.textFieldWithIcon : null
                ]}
                placeholderTextColor={useThemeColor('light', 'backgrounds.primary')}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    leftIconContainer: {
        position: 'absolute',
        left: 20,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    textField: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: 'rgba(0, 0, 0, 0.2)', // Gray border
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: '#000000',
        minHeight: 56,
    },
    textFieldWithIcon: {
        paddingLeft: 55, // Make space for the icon
    },
});
