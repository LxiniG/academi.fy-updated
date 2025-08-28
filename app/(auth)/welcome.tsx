import { CustomButton } from '@/components/ui/CustomButton';
import { Headline0 } from '@/components/ui/Typography';
import { Strings } from '@/constants/Strings';
import { router } from 'expo-router';
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default function WelcomeScreen() {
    const handleGetStarted = () => {
        router.push('./email');
    };

    return (
        <View style={styles.container}>
            {/* Main Title */}
            <View style={styles.titleContainer}>
                <Headline0 style={styles.title}>{Strings.welcome.title}</Headline0>
            </View>

            {/* Bottom Button */}
            <View style={styles.footer}>
                <CustomButton
                    title={Strings.welcome.getStartedButton}
                    onPress={handleGetStarted}
                    showArrow={true}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Always black background
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
    },
    footer: {
        paddingBottom: 50,
        paddingTop: 20,
    },
});
