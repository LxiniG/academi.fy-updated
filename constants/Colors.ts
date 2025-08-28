/**
 * Design system colors with light and dark mode support.
 * Based on the app's design tokens and CSS variables.
 */

export const Colors = {
  light: {
    // Backgrounds
    backgrounds: {
      primary: '#ffffff',
      primary0: '#ffffff00',
      secondary: '#f2f2f7',
    },

    // Fills
    fills: {
      primary: '#78788033',
      primary100: '#e4e4e6',
      quaternary: '#78788014',
      secondary: '#78788029',
      tertiary: '#7878801f',
    },

    // General colors
    general: {
      black: '#000000',
      blue: '#3888ff',
      green: '#00d619',
      lightGreen: '#1cff67',
      red: '#ff3b30',
      skyBlue: '#14b2f3',
      white: '#ffffff',
      greenTemporary: '#10d410',
      purple: '#9041ff',
    },

    // Labels
    labels: {
      primary: '#000000',
      quaternary: '#3c3c432e',
      secondary: '#3c3c4399',
      tertiary: '#3c3c434d',
    },

    // Miscellaneous
    miscellaneous: {
      barBorder: '#00000033',
      blurredBackground: '#ffffffbf',
      elevatedButtonStroke: '#8484844d',
    },
  },

  dark: {
    // Backgrounds
    backgrounds: {
      primary: '#000000',
      primary0: '#00000000',
      secondary: '#1c1c1e',
    },

    // Fills
    fills: {
      primary: '#7878805c',
      primary100: '#2b2b2e',
      quaternary: '#7878802e',
      secondary: '#78788052',
      tertiary: '#7878803d',
    },

    // General colors
    general: {
      black: '#000000',
      blue: '#3888ff',
      green: '#00d619',
      lightGreen: '#1cff67',
      red: '#ff3b30',
      skyBlue: '#14b2f3',
      white: '#ffffff',
      greenTemporary: '#10d410',
      purple: '#9041ff',
    },

    // Labels
    labels: {
      primary: '#ffffff',
      quaternary: '#ebebf52e',
      secondary: '#ebebf599',
      tertiary: '#ebebf54d',
    },

    // Miscellaneous
    miscellaneous: {
      barBorder: '#ffffff26',
      blurredBackground: '#1c1c1ccc',
      elevatedButtonStroke: '#f5f5f54d',
    },
  },
} as const;
