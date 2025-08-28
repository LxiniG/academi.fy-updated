import { AnimatedInputIcon } from '@/components/ui/AnimatedInputIcon';
import { CustomButton } from '@/components/ui/CustomButton';
import { CustomTextField } from '@/components/ui/CustomTextField';
import { ElevatedButton } from '@/components/ui/ElevatedButton';
import { Body2, Headline1 } from '@/components/ui/Typography';
import { UntitledIcon } from '@/components/ui/UntitledIcon';
import { Strings } from '@/constants/Strings';
import { useAuthFlow } from '@/contexts/AuthFlowContext';
import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

export default function EmailScreen() {
    const { flowData, updateFlowData } = useAuthFlow();
    const [email, setEmail] = useState(flowData.email || '');
    const [isValid, setIsValid] = useState(false);
    const [isEmailFormat, setIsEmailFormat] = useState(false);

    const scrollViewRef = useRef<ScrollView>(null);
    const buttonRef = useRef<View>(null);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
            // Scroll to show the button above the keyboard
            setTimeout(() => {
                buttonRef.current?.measureInWindow((x, y, width, height) => {
                    const keyboardHeight = event.endCoordinates.height;
                    const buttonBottom = y + height;
                    const screenHeight = Platform.OS === 'ios' ?
                        event.endCoordinates.screenY :
                        event.endCoordinates.screenY - keyboardHeight;

                    if (buttonBottom > screenHeight - 20) { // 20px buffer
                        const scrollAmount = buttonBottom - screenHeight + 100; // Extra space above button
                        scrollViewRef.current?.scrollTo({
                            y: scrollAmount,
                            animated: true,
                        });
                    }
                });
            }, 100);
        });

        return () => {
            keyboardDidShowListener?.remove();
        };
    }, []);

    const validateEmail = (text: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmail = emailRegex.test(text);
        const valid = isEmail || text.length > 0; // Accept any non-empty input for username

        setIsEmailFormat(isEmail);
        setIsValid(valid);
        setEmail(text);
    };

    const handleContinue = () => {
        if (!isValid || email.trim().length === 0) {
            Alert.alert('Eingabe erforderlich', 'Bitte gib deine E-Mail oder deinen Benutzernamen ein');
            return;
        }

        updateFlowData({ email });
        router.push('./password');
    };

    const handleBack = () => {
        router.back();
    };

    const handleUntisUse = () => {
        // Handle Untis integration
        console.log('Untis verwenden pressed');
        // You can navigate to Untis integration flow here
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
            {/* Fixed Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <UntitledIcon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>


                <ElevatedButton
                    title={Strings.auth.useUntis}
                    onPress={() => {
                        // Handle Untis action
                    }}
                    style={{
                        alignSelf: 'flex-end',
                    }}
                />            </View>
            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <Headline1 style={styles.title}>{Strings.auth.title}</Headline1>
                    <Body2 style={styles.subtitle}>
                        {Strings.auth.subtitle}
                    </Body2>

                    <View style={styles.inputContainer}>
                        <CustomTextField
                            placeholder={Strings.auth.emailPlaceholder}
                            value={email}
                            onChangeText={validateEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            autoFocus
                            leftIcon={
                                <AnimatedInputIcon
                                    isEmail={isEmailFormat}
                                    color="black"
                                    size={25}
                                />
                            }
                        />
                    </View>

                    <View ref={buttonRef} style={styles.buttonContainer}>
                        <CustomButton
                            title={Strings.common.next}
                            onPress={handleContinue}
                            variant="dark"
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 30,
        backgroundColor: '#f8f9fa',
        zIndex: 1,
    },
    backButton: {
        padding: 10,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 30,
        paddingBottom: 50, // Extra padding at bottom for keyboard
    },
    content: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        marginBottom: 15,
        color: '#333',
    },
    subtitle: {
        marginBottom: 40,
        color: '#666',
        lineHeight: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});
