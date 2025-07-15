import { StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { CommonStyles } from './styles/Common.styles';
import BottomTabNavigator from './navigation/BottomTabNavigator';


export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <View style={CommonStyles.app}>
                    <NavigationContainer>
                        <BottomTabNavigator />
                    </NavigationContainer>
                </View>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}
