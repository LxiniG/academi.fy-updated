import { IconSymbol } from '@/components/ui/IconSymbol';
import { useAuth } from '@/contexts/AuthContext';
import { useAuthFlow } from '@/contexts/AuthFlowContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const INTERESTS = [
    'Mathematics', 'Science', 'Literature', 'History', 'Programming',
    'Design', 'Business', 'Languages', 'Music', 'Art', 'Psychology', 'Philosophy'
];

export default function ProfileSetupScreen() {
    const { flowData, resetFlowData } = useAuthFlow();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const toggleInterest = (interest: string) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const canContinue = firstName.trim() && lastName.trim() && selectedInterests.length > 0;

    const handleComplete = async () => {
        if (!canContinue) {
            Alert.alert('Incomplete Profile', 'Please fill in all fields and select at least one interest');
            return;
        }

        setIsLoading(true);
        try {
            // Use the collected flow data
            await login(flowData.email, flowData.password);
            resetFlowData(); // Clear the flow data
            router.replace('/(authenticated)/(tabs)' as any);
        } catch (error) {
            Alert.alert('Setup Failed', 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <IconSymbol size={24} name="chevron.left" color="#007AFF" />
                </TouchableOpacity>

                <View style={styles.progressContainer}>
                    <View style={[styles.progressDot, styles.progressActive]} />
                    <View style={[styles.progressDot, styles.progressActive]} />
                    <View style={[styles.progressDot, styles.progressActive]} />
                    <View style={[styles.progressDot, styles.progressActive]} />
                    <View style={[styles.progressDot, styles.progressActive]} />
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <IconSymbol size={60} name="person.circle.fill" color="#007AFF" />
                </View>

                <Text style={styles.title}>Tell us about yourself</Text>
                <Text style={styles.subtitle}>
                    Help us personalize your learning experience
                </Text>

                <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.nameInput}
                        placeholder="First name"
                        value={firstName}
                        onChangeText={setFirstName}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.nameInput}
                        placeholder="Last name"
                        value={lastName}
                        onChangeText={setLastName}
                        autoCapitalize="words"
                        autoCorrect={false}
                    />
                </View>

                <Text style={styles.sectionTitle}>What are you interested in?</Text>
                <Text style={styles.sectionSubtitle}>Choose at least one topic</Text>

                <View style={styles.interestsContainer}>
                    {INTERESTS.map((interest) => (
                        <TouchableOpacity
                            key={interest}
                            style={[
                                styles.interestChip,
                                selectedInterests.includes(interest) && styles.interestChipSelected
                            ]}
                            onPress={() => toggleInterest(interest)}
                        >
                            <Text style={[
                                styles.interestText,
                                selectedInterests.includes(interest) && styles.interestTextSelected
                            ]}>
                                {interest}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity
                    style={[
                        styles.completeButton,
                        canContinue && styles.completeButtonActive
                    ]}
                    onPress={handleComplete}
                    disabled={!canContinue || isLoading}
                >
                    <Text style={[
                        styles.completeButtonText,
                        canContinue && styles.completeButtonTextActive
                    ]}>
                        {isLoading ? 'Setting up...' : 'Complete Setup'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 30,
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
        paddingHorizontal: 30,
        paddingBottom: 50,
    },
    iconContainer: {
        alignItems: 'center',
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
    nameContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        gap: 15,
    },
    nameInput: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#E0E0E0',
        padding: 18,
        borderRadius: 12,
        fontSize: 16,
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    interestsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 40,
        gap: 10,
    },
    interestChip: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#E0E0E0',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    interestChipSelected: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    interestText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    interestTextSelected: {
        color: 'white',
    },
    completeButton: {
        backgroundColor: '#E0E0E0',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
    },
    completeButtonActive: {
        backgroundColor: '#007AFF',
    },
    completeButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#999',
    },
    completeButtonTextActive: {
        color: 'white',
    },
});
