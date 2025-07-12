import { SafeAreaView, View, Text } from "react-native";
import { CommonStyles } from "../styles/Common.styles";

export default function LibraryScreen() {
    return (
        <SafeAreaView style={CommonStyles.screen}>
            <View style={CommonStyles.center}>
                <Text>Library</Text>
            </View>
        </SafeAreaView>
    )
}
