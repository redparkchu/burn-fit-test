import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MyPageScreen from '../screens/MyPageScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen}
                options={{
                    title: 'HOME',
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Calendar'
                component={CalendarScreen}
                options={{
                    title: 'CALENDAR',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'calendar' : 'calendar-outline'} color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Library'
                component={LibraryScreen}
                options={{
                    title: 'LIBRARY',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="dumbbell" color={color} size={size} />
                    )
                }}        
            />
            <Tab.Screen 
                name='MyPage'
                component={MyPageScreen}
                options={{
                    title: 'MY PAGE',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
