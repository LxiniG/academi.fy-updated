import { FigmaColors } from '@/constants/Colors';
import React from 'react';
import { Text, View } from 'react-native';

/**
 * Example component showing how to use Figma colors with Tailwind CSS in React Native
 */
export function ColorExample() {
    return (
        <View className="p-4 space-y-4">
            <Text className="text-2xl font-bold text-neutral-900 mb-4">
                Figma Colors with Tailwind CSS
            </Text>

            {/* Using Tailwind classes with your custom colors */}
            <View className="space-y-2">
                <View className="bg-primary-500 p-4 rounded-lg">
                    <Text className="text-white font-semibold">Primary 500</Text>
                </View>

                <View className="bg-blue-400 p-4 rounded-lg">
                    <Text className="text-white font-semibold">Blue 400</Text>
                </View>

                <View className="bg-green-500 p-4 rounded-lg">
                    <Text className="text-white font-semibold">Green 500</Text>
                </View>

                <View className="bg-red-500 p-4 rounded-lg">
                    <Text className="text-white font-semibold">Red 500</Text>
                </View>

                <View className="bg-neutral-200 p-4 rounded-lg">
                    <Text className="text-neutral-800 font-semibold">Neutral 200</Text>
                </View>
            </View>

            {/* Using arbitrary values with CSS variables */}
            <View className="space-y-2 mt-6">
                <Text className="text-lg font-semibold text-neutral-700">
                    Using CSS Variables:
                </Text>

                <View style={{ backgroundColor: 'var(--primary-600)' }} className="p-4 rounded-lg">
                    <Text className="text-white font-semibold">CSS Variable: --primary-600</Text>
                </View>

                <View className="bg-[var(--blue-300)] p-4 rounded-lg">
                    <Text className="text-white font-semibold">Arbitrary Value: bg-[var(--blue-300)]</Text>
                </View>
            </View>

            {/* Using TypeScript constants */}
            <View className="space-y-2 mt-6">
                <Text className="text-lg font-semibold text-neutral-700">
                    Using TypeScript Constants:
                </Text>

                <View style={{ backgroundColor: FigmaColors.yellow[400] }} className="p-4 rounded-lg">
                    <Text className="text-white font-semibold">FigmaColors.yellow[400]</Text>
                </View>
            </View>
        </View>
    );
}
