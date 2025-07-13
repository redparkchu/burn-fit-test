import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { CommonStyles } from "../styles/Common.styles";
import Calendar from "../components/calendars/Calendar";
import CalendarTopBar from "../components/calendars/CalendarTopBar";

export default function CalendarScreen() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const [dateUtil, setDateUtil] = useState( {month: month, year: year} )

    return (
        <SafeAreaView style={CommonStyles.screen}>
            <View>
                <CalendarTopBar dateUtil={dateUtil} setDateUtil={setDateUtil} />
                <Calendar dateUtil={dateUtil} />
            </View>
        </SafeAreaView>
    )
}
