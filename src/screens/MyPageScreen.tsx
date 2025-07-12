import { SafeAreaView, View, Text } from "react-native";
import { CommonStyles } from "../styles/Common.styles";

export default function MyPageScreen() {
    return (
        <SafeAreaView style={CommonStyles.screen}>
            <View style={CommonStyles.center}>
                <Text>My Page</Text>
            </View>
        </SafeAreaView>
    )
}
