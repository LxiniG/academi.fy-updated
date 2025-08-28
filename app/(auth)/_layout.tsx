import { AuthFlowProvider } from '@/contexts/AuthFlowContext';
import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <AuthFlowProvider>
            <Stack screenOptions={{
                headerShown: false,
                gestureEnabled: false, // Prevent back gesture during flow
                animation: 'slide_from_right'
            }}>
                <Stack.Screen name="welcome" />
                <Stack.Screen name="email" />
                <Stack.Screen name="password" />
                <Stack.Screen name="verification" />
                <Stack.Screen name="profile-setup" />
                <Stack.Screen name="login" />
            </Stack>
        </AuthFlowProvider>
    );
}
