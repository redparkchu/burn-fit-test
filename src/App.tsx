import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, View } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { CommonStyles } from './styles/Common.styles';


export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={CommonStyles.app}>
                <NavigationContainer>
                    <BottomTabNavigator />
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    );
}
