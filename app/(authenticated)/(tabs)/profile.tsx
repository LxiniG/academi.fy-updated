import { IconSymbol } from '@/components/ui/IconSymbol';
import { useAuth } from '@/contexts/AuthContext';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    };

    const profileItems = [
        { icon: 'person.circle', title: 'Edit Profile', color: '#007AFF' },
        { icon: 'bell', title: 'Notifications', color: '#34C759' },
        { icon: 'shield', title: 'Privacy & Security', color: '#FF9500' },
        { icon: 'questionmark.circle', title: 'Help & Support', color: '#AF52DE' },
        { icon: 'gear', title: 'Settings', color: '#8E8E93' },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {user?.name?.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                </View>
                <Text style={styles.name}>{user?.name}</Text>
                <Text style={styles.email}>{user?.email}</Text>
            </View>

            <View style={styles.section}>
                {profileItems.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.profileItem}>
                        <View style={styles.itemLeft}>
                            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
                                <IconSymbol size={20} name={item.icon as any} color={item.color} />
                            </View>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                        <IconSymbol size={16} name="chevron.right" color="#8E8E93" />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.section}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <IconSymbol size={20} name="rectangle.portrait.and.arrow.right" color="#FF3B30" />
                    <Text style={styles.logoutText}>Sign Out</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Academi.fy v1.0.0</Text>
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
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef',
    },
    avatarContainer: {
        marginBottom: 15,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
    section: {
        backgroundColor: 'white',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 12,
        overflow: 'hidden',
    },
    profileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    logoutText: {
        fontSize: 16,
        color: '#FF3B30',
        marginLeft: 8,
        fontWeight: '500',
    },
    footer: {
        alignItems: 'center',
        padding: 30,
    },
    footerText: {
        fontSize: 14,
        color: '#8E8E93',
    },
});
