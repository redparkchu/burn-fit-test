import { View, Text } from "react-native";
import { CommonStyles } from "../styles/Common.styles";
import SafeAreaScreen from "./SafeAreaScreen";

export default function LibraryScreen() {
    return (
        <SafeAreaScreen>
            <View style={CommonStyles.center}>
                <Text>Library</Text>
            </View>
        </SafeAreaScreen>
    )
}
