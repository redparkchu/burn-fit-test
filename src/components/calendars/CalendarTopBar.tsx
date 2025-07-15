import { View, Text } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import CalendarData, { MonthYear } from "../../data/calendars/CalendarData";
import ArrowButton from "./ArrowButton";

type Props = {
    monthYear: MonthYear,
    setMonthYear: (monthYear: MonthYear) => void
}

export default function CalendarTopBar(props: Props) {
    const month = props.monthYear.month
    const monthName = getMonthName(month);
    const year = props.monthYear.year;

    const prevMonth = () => {
        const prevDate = CalendarData.getPrev(month, year);
        const monthYear = { month: prevDate.getMonth() + 1, year: prevDate.getFullYear() };
        props.setMonthYear(monthYear);
    }
    
    const nextMonth = () => {
        const nextDate = CalendarData.getNext(month, year);
        const monthYear = { month: nextDate.getMonth() + 1, year: nextDate.getFullYear() };
        props.setMonthYear(monthYear);
    }

    return (
        <View style={CalendarStyles.topBar}>
            <ArrowButton direction="left" onPress={prevMonth} />
            <Text style={CalendarStyles.topBarText}>{monthName} {year}</Text>
            <ArrowButton direction="right" onPress={nextMonth} />
        </View>
    )
}

function getMonthName(month: number) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthNames[month - 1];
}
