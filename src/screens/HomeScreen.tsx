import { SafeAreaView, View, Text } from "react-native";
import { CommonStyles } from "../styles/Common.styles";

export default function HomeScreen() {
    return (
        <SafeAreaView style={CommonStyles.screen}>
            <View style={CommonStyles.center}>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}
