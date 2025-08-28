import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function VerificationScreen() {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [resendTimer, setResendTimer] = useState(30);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setResendTimer((prev) => prev > 0 ? prev - 1 : 0);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleCodeChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        // Auto-focus next input
        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }

        // Auto-verify when all fields are filled
        if (newCode.every(digit => digit !== '') && text) {
            handleVerify(newCode.join(''));
        }
    };

    const handleBackspace = (index: number) => {
        if (code[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = (verificationCode?: string) => {
        const codeToCheck = verificationCode || code.join('');

        if (codeToCheck.length !== 6) {
            Alert.alert('Invalid Code', 'Please enter the complete 6-digit code');
            return;
        }

        // Simulate verification success
        router.push('./profile-setup');
    };

    const handleResend = () => {
        if (resendTimer === 0) {
            setResendTimer(30);
            Alert.alert('Code Sent', 'A new verification code has been sent to your email');
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <IconSymbol size={24} name="chevron.left" color="#007AFF" />
                </TouchableOpacity>

                <View style={styles.progressContainer}>
                    <View style={[styles.progressDot, styles.progressActive]} />
                    <View style={[styles.progressDot, styles.progressActive]} />
                    <View style={[styles.progressDot, styles.progressActive]} />
                    <View style={styles.progressDot} />
                    <View style={styles.progressDot} />
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <IconSymbol size={60} name="envelope.fill" color="#007AFF" />
                </View>

                <Text style={styles.title}>Check your email</Text>
                <Text style={styles.subtitle}>
                    We've sent a 6-digit verification code to your email address
                </Text>

                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => { inputRefs.current[index] = ref; }}
                            style={[
                                styles.codeInput,
                                digit && styles.codeInputFilled
                            ]}
                            value={digit}
                            onChangeText={(text) => handleCodeChange(text, index)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace') {
                                    handleBackspace(index);
                                }
                            }}
                            keyboardType="numeric"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.resendContainer}
                    onPress={handleResend}
                    disabled={resendTimer > 0}
                >
                    <Text style={[
                        styles.resendText,
                        resendTimer === 0 && styles.resendTextActive
                    ]}>
                        {resendTimer > 0
                            ? `Resend code in ${resendTimer}s`
                            : 'Resend verification code'
                        }
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.continueButton,
                        code.every(digit => digit !== '') && styles.continueButtonActive
                    ]}
                    onPress={() => handleVerify()}
                    disabled={!code.every(digit => digit !== '')}
                >
                    <Text style={[
                        styles.continueButtonText,
                        code.every(digit => digit !== '') && styles.continueButtonTextActive
                    ]}>
                        Verify Code
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingHorizontal: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 40,
    },
    backButton: {
        padding: 10,
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
    },
    progressActive: {
        backgroundColor: '#007AFF',
    },
    content: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
    },
    iconContainer: {
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
        lineHeight: 24,
        textAlign: 'center',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        width: '100%',
    },
    codeInput: {
        width: 45,
        height: 55,
        borderWidth: 2,
        borderColor: '#E0E0E0',
        borderRadius: 12,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    codeInputFilled: {
        borderColor: '#007AFF',
    },
    resendContainer: {
        marginBottom: 40,
    },
    resendText: {
        fontSize: 16,
        color: '#999',
    },
    resendTextActive: {
        color: '#007AFF',
    },
    continueButton: {
        backgroundColor: '#E0E0E0',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        width: '100%',
    },
    continueButtonActive: {
        backgroundColor: '#007AFF',
    },
    continueButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#999',
    },
    continueButtonTextActive: {
        color: 'white',
    },
});
