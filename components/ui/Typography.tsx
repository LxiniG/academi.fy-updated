import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { FontWeight, Typography, TypographyVariant, createTextStyle } from '../../constants/Typography';

interface CustomTextProps extends RNTextProps {
    variant?: TypographyVariant;
    weight?: FontWeight;
    color?: string;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    align?: 'left' | 'center' | 'right' | 'justify';
    transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

export function Text({
    variant,
    weight,
    color,
    size,
    align,
    transform,
    style,
    children,
    ...props
}: CustomTextProps) {
    // Get base style from variant
    let baseStyle = variant ? Typography[variant] : Typography.body1;

    // If weight is specified, override the font family
    if (weight) {
        baseStyle = {
            ...baseStyle,
            ...createTextStyle({ family: weight }),
        };
    }

    // Create custom style if size, color, align, or transform is specified
    const customStyle = createTextStyle({
        ...(weight && { family: weight }),
        ...(size && { size }),
        ...(color && { color }),
        ...(align && { textAlign: align }),
        ...(transform && { textTransform: transform }),
    });

    const finalStyle = [
        baseStyle,
        weight || size || color || align || transform ? customStyle : {},
        style,
    ];

    return (
        <RNText style={finalStyle} {...props}>
            {children}
        </RNText>
    );
}

export function Headline0({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="headline0" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Headline1({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="headline1" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Headline2({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="headline2" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Headline3({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="headline3" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Headline4({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="headline4" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Title({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="headline0" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Body({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="body1" style={style} {...props}>
            {children}
        </Text>
    );
}

export function BodyBold({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="body1Bold" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Body2({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="body2" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Body2Bold({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="body2Bold" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Tagline({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="tagline" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Caption({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="caption" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Label({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="body2Bold" style={style} {...props}>
            {children}
        </Text>
    );
}

export function Code({ children, style, ...props }: RNTextProps) {
    return (
        <Text variant="code" style={style} {...props}>
            {children}
        </Text>
    );
}
