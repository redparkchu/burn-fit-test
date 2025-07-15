import { useEffect, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { GestureDetector } from "react-native-gesture-handler";
import CalendarTopBar from "../../components/calendars/CalendarTopBar";
import Calendar from "../../components/calendars/Calendar";
import CalendarTab from "../../components/calendars/CalendarTab";
import SafeAreaScreen from "../SafeAreaScreen";
import CalendarGesture from "./CalendarGesture";
import CalendarData from "../../data/calendars/CalendarData";

export default function CalendarScreen() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const [yearMonth, setYearMonth] = useState({year: year, month: month});
    const [weekIndex, setWeekIndex] = useState(0);
    const [mode, setMode] = useState("month");
    const changeMode = (mode: string) => { 
        setMode(mode);
    };
    const translateY = useSharedValue(0);
    const panGesture = CalendarGesture(translateY, changeMode);
    const calendar = new CalendarData(yearMonth.year, yearMonth.month, weekIndex, setWeekIndex, mode);

    useEffect(() => {
        calendar.changeWeekIndex();
        calendar.saveWeekIndex();
    }, [yearMonth]);

    return (
        <SafeAreaScreen>
            <CalendarTopBar calendar={calendar} setYearMonth={setYearMonth} />
            <Calendar calendar={calendar} translateY={translateY} />
            <GestureDetector gesture={panGesture}>
                <CalendarTab translateY={translateY}/>
            </GestureDetector>
        </SafeAreaScreen>
    )
}
