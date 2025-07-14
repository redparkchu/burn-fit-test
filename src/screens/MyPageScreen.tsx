import { View, Text } from "react-native";
import { CommonStyles } from "../styles/Common.styles";
import SafeAreaScreen from "./SafeAreaScreen";

export default function MyPageScreen() {
    return (
        <SafeAreaScreen>
            <View style={CommonStyles.center}>
                <Text>My Page</Text>
            </View>
        </SafeAreaScreen>
    )
}
