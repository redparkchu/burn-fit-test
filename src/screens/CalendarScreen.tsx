import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { CommonStyles } from "../styles/Common.styles";
import Calendar from "../components/calendars/Calendar";
import CalendarTopBar from "../components/calendars/CalendarTopBar";

export default function CalendarScreen() {
    const date = new Date();
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth() + 1);

    return (
        <SafeAreaView style={CommonStyles.screen}>
            <View>
                <CalendarTopBar month={month} year={year} />
                <Calendar month={month} year={year} />
            </View>
        </SafeAreaView>
    )
}
