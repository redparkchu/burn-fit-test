import { View, Text } from "react-native";
import { CommonStyles } from "../styles/Common.styles";
import SafeAreaScreen from "./SafeAreaScreen";

export default function HomeScreen() {
    return (
        <SafeAreaScreen>
            <View style={CommonStyles.center}>
                <Text>Home</Text>
            </View>
        </SafeAreaScreen>
    )
}
