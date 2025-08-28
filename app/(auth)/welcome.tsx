import { ColorExample } from '@/components/examples/ColorExample';
import { router } from 'expo-router';
import React from 'react';

export default function WelcomeScreen() {
    const handleGetStarted = () => {
        router.push('./email');
    };

    return (
        <ColorExample></ColorExample>
    );
}