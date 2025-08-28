import { TextStyle } from 'react-native';

// Font family mappings for different weights
export const FontFamily = {
    Inter: {
        thin: 'Inter_100Thin',
        extraLight: 'Inter_200ExtraLight',
        light: 'Inter_300Light',
        regular: 'Inter_400Regular',
        medium: 'Inter_500Medium',
        semiBold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extraBold: 'Inter_800ExtraBold',
        black: 'Inter_900Black',
    },
    SpaceMono: {
        regular: 'SpaceMono-Regular',
    },
} as const;

// Font size scale
export const FontSize = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
} as const;

// Line height scale
export const LineHeight = {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
} as const;

// Pre-defined typography styles
export const Typography = {
    // Headlines (main headings)
    headline0: {
        fontFamily: FontFamily.Inter.bold,
        fontSize: FontSize['5xl'], // 48px
        lineHeight: 50,
        letterSpacing: -1.4
    } as TextStyle,

    headline1: {
        fontFamily: FontFamily.Inter.bold,
        fontSize: FontSize['4xl'], // 36px
        lineHeight: 38,
        letterSpacing: -1.2,
    } as TextStyle,

    headline2: {
        fontFamily: FontFamily.Inter.semiBold,
        fontSize: FontSize['3xl'], // 30px
        lineHeight: FontSize['3xl'] * LineHeight.tight,
    } as TextStyle,

    headline3: {
        fontFamily: FontFamily.Inter.semiBold,
        fontSize: FontSize['2xl'], // 24px
        lineHeight: FontSize['2xl'] * LineHeight.snug,
    } as TextStyle,

    headline4: {
        fontFamily: FontFamily.Inter.semiBold,
        fontSize: FontSize.xl, // 20px
        lineHeight: FontSize.xl * LineHeight.snug,
    } as TextStyle,

    // Body text styles
    body1: {
        fontFamily: FontFamily.Inter.regular,
        fontSize: FontSize.base, // 16px
        lineHeight: FontSize.base * LineHeight.relaxed,
    } as TextStyle,

    body1Bold: {
        fontFamily: FontFamily.Inter.semiBold,
        fontSize: FontSize.base, // 16px
        lineHeight: FontSize.base * LineHeight.relaxed,
    } as TextStyle,

    body2: {
        fontFamily: FontFamily.Inter.regular,
        fontSize: FontSize.sm, // 14px
        lineHeight: FontSize.sm * LineHeight.normal,
    } as TextStyle,

    body2Bold: {
        fontFamily: FontFamily.Inter.semiBold,
        fontSize: FontSize.sm, // 14px
        lineHeight: FontSize.sm * LineHeight.normal,
    } as TextStyle,

    // Tagline (small descriptive text)
    tagline: {
        fontFamily: FontFamily.Inter.bold,
        fontSize: FontSize.xs, // 12px
        lineHeight: FontSize.xs * LineHeight.normal,
    } as TextStyle,

    // Additional utility styles (keeping these for compatibility)
    caption: {
        fontFamily: FontFamily.Inter.regular,
        fontSize: FontSize.xs,
        lineHeight: FontSize.xs * LineHeight.normal,
    } as TextStyle,

    code: {
        fontFamily: FontFamily.SpaceMono.regular,
        fontSize: FontSize.sm,
        lineHeight: FontSize.sm * LineHeight.normal,
    } as TextStyle,
} as const;

// Helper function to get font style by weight
export const getInterFont = (weight: keyof typeof FontFamily.Inter): TextStyle => {
    return {
        fontFamily: FontFamily.Inter[weight],
    };
};

// Helper function to create custom text style
export const createTextStyle = (options: {
    family?: keyof typeof FontFamily.Inter;
    size?: keyof typeof FontSize;
    lineHeight?: keyof typeof LineHeight;
    color?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}): TextStyle => {
    const {
        family = 'regular',
        size = 'base',
        lineHeight = 'normal',
        color,
        textAlign,
        textTransform,
    } = options;

    return {
        fontFamily: FontFamily.Inter[family],
        fontSize: FontSize[size],
        lineHeight: FontSize[size] * LineHeight[lineHeight],
        ...(color && { color }),
        ...(textAlign && { textAlign }),
        ...(textTransform && { textTransform }),
    };
};

// Type definitions
export type TypographyVariant = keyof typeof Typography;
export type FontWeight = keyof typeof FontFamily.Inter;
export type FontSizeKey = keyof typeof FontSize;
export type LineHeightKey = keyof typeof LineHeight;
