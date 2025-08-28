import { IconSymbol } from '@/components/ui/IconSymbol';
import { useAuth } from '@/contexts/AuthContext';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AuthenticatedHomeScreen() {
    const { user } = useAuth();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Welcome back, {user?.name}!</Text>
                <Text style={styles.subtitle}>Ready to learn something new today?</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quick Actions</Text>
                <View style={styles.actionsGrid}>
                    <TouchableOpacity style={styles.actionCard}>
                        <IconSymbol size={32} name="book.fill" color="#007AFF" />
                        <Text style={styles.actionText}>Study Materials</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionCard}>
                        <IconSymbol size={32} name="calendar" color="#34C759" />
                        <Text style={styles.actionText}>Schedule</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionCard}>
                        <IconSymbol size={32} name="chart.bar.fill" color="#FF9500" />
                        <Text style={styles.actionText}>Progress</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionCard}>
                        <IconSymbol size={32} name="person.2.fill" color="#AF52DE" />
                        <Text style={styles.actionText}>Study Groups</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Activity</Text>
                <View style={styles.activityCard}>
                    <Text style={styles.activityTitle}>Mathematics Assignment</Text>
                    <Text style={styles.activityDescription}>Due tomorrow</Text>
                </View>
                <View style={styles.activityCard}>
                    <Text style={styles.activityTitle}>Study Group Meeting</Text>
                    <Text style={styles.activityDescription}>Today at 3:00 PM</Text>
                </View>
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
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    actionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    actionCard: {
        width: '48%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    actionText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },
    activityCard: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    activityTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    activityDescription: {
        fontSize: 14,
        color: '#666',
    },
});
