import { useState } from "react";
import Calendar from "../components/calendars/Calendar";
import CalendarTopBar from "../components/calendars/CalendarTopBar";
import SafeAreaScreen from "./SafeAreaScreen";

export default function CalendarScreen() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const [monthYear, setMonthYear] = useState( {month: month, year: year} )

    return (
        <SafeAreaScreen>
            <CalendarTopBar monthYear={monthYear} setMonthYear={setMonthYear} />
            <Calendar year={monthYear.year} month={monthYear.month} />
        </SafeAreaScreen>
    )
}
