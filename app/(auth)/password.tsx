import { IconSymbol } from '@/components/ui/IconSymbol';
import { useAuthFlow } from '@/contexts/AuthFlowContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PasswordScreen() {
    const { updateFlowData } = useAuthFlow();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const isPasswordValid = password.length >= 8;
    const doPasswordsMatch = password === confirmPassword && confirmPassword.length > 0;
    const canContinue = isPasswordValid && doPasswordsMatch;

    const handleContinue = () => {
        if (!canContinue) {
            Alert.alert('Password Error', 'Please ensure passwords are valid and match');
            return;
        }

        updateFlowData({ password });
        router.push('./verification');
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
                    <View style={styles.progressDot} />
                    <View style={styles.progressDot} />
                    <View style={styles.progressDot} />
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Create a secure password</Text>
                <Text style={styles.subtitle}>
                    Your password should be at least 8 characters long
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.input,
                            isPasswordValid && styles.inputValid,
                            password.length > 0 && !isPasswordValid && styles.inputInvalid
                        ]}
                        placeholder="Create password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <IconSymbol
                            size={20}
                            name={showPassword ? "eye.slash" : "eye"}
                            color="#666"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[
                            styles.input,
                            doPasswordsMatch && styles.inputValid,
                            confirmPassword.length > 0 && !doPasswordsMatch && styles.inputInvalid
                        ]}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <IconSymbol
                            size={20}
                            name={showConfirmPassword ? "eye.slash" : "eye"}
                            color="#666"
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.requirements}>
                    <View style={styles.requirement}>
                        <IconSymbol
                            size={16}
                            name={isPasswordValid ? "checkmark.circle.fill" : "circle"}
                            color={isPasswordValid ? "#34C759" : "#E0E0E0"}
                        />
                        <Text style={[
                            styles.requirementText,
                            isPasswordValid && styles.requirementTextValid
                        ]}>
                            At least 8 characters
                        </Text>
                    </View>

                    <View style={styles.requirement}>
                        <IconSymbol
                            size={16}
                            name={doPasswordsMatch ? "checkmark.circle.fill" : "circle"}
                            color={doPasswordsMatch ? "#34C759" : "#E0E0E0"}
                        />
                        <Text style={[
                            styles.requirementText,
                            doPasswordsMatch && styles.requirementTextValid
                        ]}>
                            Passwords match
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={[
                        styles.continueButton,
                        canContinue && styles.continueButtonActive
                    ]}
                    onPress={handleContinue}
                    disabled={!canContinue}
                >
                    <Text style={[
                        styles.continueButtonText,
                        canContinue && styles.continueButtonTextActive
                    ]}>
                        Continue
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
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
        lineHeight: 24,
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: '#E0E0E0',
        padding: 18,
        borderRadius: 12,
        fontSize: 16,
        backgroundColor: 'white',
        paddingRight: 50,
    },
    inputValid: {
        borderColor: '#34C759',
    },
    inputInvalid: {
        borderColor: '#FF3B30',
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: 18,
        padding: 5,
    },
    requirements: {
        marginBottom: 40,
    },
    requirement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    requirementText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#666',
    },
    requirementTextValid: {
        color: '#34C759',
    },
    continueButton: {
        backgroundColor: '#E0E0E0',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
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
