import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";
import CalendarTopBar from "../../components/calendars/CalendarTopBar";
import Calendar from "../../components/calendars/Calendar";
import CalendarTab from "../../components/calendars/CalendarTab";
import SafeAreaScreen from "../SafeAreaScreen";
import CalendarGesture from "./CalendarGesture";

export default function CalendarScreen() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const [monthYear, setMonthYear] = useState( {month: month, year: year} )
    const translateY = useSharedValue(0);
    const panGesture = CalendarGesture(translateY);

    return (
        <SafeAreaScreen>
            <CalendarTopBar monthYear={monthYear} setMonthYear={setMonthYear} />
            <Calendar year={monthYear.year} month={monthYear.month} translateY={translateY} calendarMode="month" />
            <GestureDetector gesture={panGesture}>
                <CalendarTab translateY={translateY}/>
            </GestureDetector>
        </SafeAreaScreen>
    )
}
