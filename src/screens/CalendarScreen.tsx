import { SafeAreaView, View } from "react-native";
import { CommonStyles } from "../styles/Common.styles";
import Calendar from "../components/calendars/Calendar";
import CalendarTopBar from "../components/calendars/CalendarTopBar";

export default function CalendarScreen() {
    return (
        <SafeAreaView style={CommonStyles.screen}>
            <View>
                <CalendarTopBar />
                <Calendar />
            </View>
        </SafeAreaView>
    )
}
