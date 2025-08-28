import { useAuth } from '@/contexts/AuthContext';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

interface Chat {
    id: string;
    name: string;
    lastMessage: string;
    timestamp: string;
    avatar: string;
    unreadCount: number;
}

const mockChats: Chat[] = [
    {
        id: '1',
        name: 'Alice Johnson',
        lastMessage: 'Hey! How are you doing?',
        timestamp: '2m ago',
        avatar: '👩‍💼',
        unreadCount: 2,
    },
    {
        id: '2',
        name: 'Study Group',
        lastMessage: 'Meeting tomorrow at 3 PM',
        timestamp: '1h ago',
        avatar: '📚',
        unreadCount: 0,
    },
    {
        id: '3',
        name: 'John Smith',
        lastMessage: 'Thanks for the notes!',
        timestamp: '3h ago',
        avatar: '👨‍🎓',
        unreadCount: 1,
    },
    {
        id: '4',
        name: 'Project Team',
        lastMessage: 'Final presentation is ready',
        timestamp: '1d ago',
        avatar: '👥',
        unreadCount: 0,
    },
];

export default function ChatsScreen() {
    const { user } = useAuth();

    const renderChatItem = ({ item }: { item: Chat }) => (
        <TouchableOpacity style={styles.chatItem}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.avatar}</Text>
            </View>
            <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                    <Text style={styles.chatName}>{item.name}</Text>
                    <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
                <View style={styles.messageRow}>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {item.lastMessage}
                    </Text>
                    {item.unreadCount > 0 && (
                        <View style={styles.unreadBadge}>
                            <Text style={styles.unreadText}>{item.unreadCount}</Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Welcome back, {user?.name}!</Text>
                <Text style={styles.subtitle}>Your conversations</Text>
            </View>

            <FlatList
                data={mockChats}
                renderItem={renderChatItem}
                keyExtractor={(item) => item.id}
                style={styles.chatList}
                showsVerticalScrollIndicator={false}
            />
        </View>
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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    chatList: {
        flex: 1,
    },
    chatItem: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#e9ecef',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    avatarText: {
        fontSize: 20,
    },
    chatContent: {
        flex: 1,
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    chatName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    timestamp: {
        fontSize: 12,
        color: '#999',
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lastMessage: {
        fontSize: 14,
        color: '#666',
        flex: 1,
    },
    unreadBadge: {
        backgroundColor: '#007AFF',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    unreadText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
