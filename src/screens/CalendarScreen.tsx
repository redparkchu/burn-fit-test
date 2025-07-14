import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { CommonStyles } from "../styles/Common.styles";
import Calendar from "../components/calendars/Calendar";
import CalendarTopBar from "../components/calendars/CalendarTopBar";

export default function CalendarScreen() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const [monthYear, setMonthYear] = useState( {month: month, year: year} )

    return (
        <SafeAreaView style={CommonStyles.screen}>
            <View>
                <CalendarTopBar monthYear={monthYear} setMonthYear={setMonthYear} />
                <Calendar year={monthYear.year} month={monthYear.month} />
            </View>
        </SafeAreaView>
    )
}
