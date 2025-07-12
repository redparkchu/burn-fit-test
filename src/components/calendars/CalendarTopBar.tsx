import { View, Text, StyleSheet } from "react-native";
import ArrowButton from "./ArrowButton";

const testFunction = () => {
    alert("버튼이 눌렸다옹");
}

const testStyels = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 20
    },
})

export default function CalendarTopBar() {
    return (
        <View style={testStyels.topBar}>
            <ArrowButton direction="left" onPress={testFunction}></ArrowButton>
            <Text>여긴 날짜</Text>
            <ArrowButton direction="right" onPress={testFunction}></ArrowButton>
        </View>
    )
}
