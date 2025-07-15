import { View, Text } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import CalendarData, { YearMonth } from "../../data/calendars/CalendarData";
import ArrowButton from "./ArrowButton";

type Props = {
    calendar: CalendarData,
    setYearMonth: (yearMonth: YearMonth) => void
}

export default function CalendarTopBar(props: Props) {
    const calendar = props.calendar;
    const monthName = calendar.getMonthName();

    const prevMonth = () => {
        const prevDate = calendar.getPrevMonth();
        const yearMonth = { year: prevDate.getFullYear(), month: prevDate.getMonth() + 1 };
        props.setYearMonth(yearMonth);
    }

    const nextMonth = () => {
        const nextDate = calendar.getNextMonth();
        const yearMonth = { year: nextDate.getFullYear(), month: nextDate.getMonth() + 1 };
        props.setYearMonth(yearMonth);
    }

    const prevWeek = () => {
        const prevDate = calendar.getPrevWeek();
        const yearMonth = { year: prevDate.getFullYear(), month: prevDate.getMonth() + 1 };
        props.setYearMonth(yearMonth);
        calendar.saveWeekIndex();
    }
    
    const nextWeek = () => {
        const nextDate = calendar.getNextWeek();
        const yearMonth = { year: nextDate.getFullYear(), month: nextDate.getMonth() + 1 };
        props.setYearMonth(yearMonth);
        calendar.saveWeekIndex();
    }

    const handleClick = calendar.mode === "month" ? {prev: prevMonth, next: nextMonth} : {prev: prevWeek, next: nextWeek};

    return (
        <View style={CalendarStyles.topBar}>
            <ArrowButton direction="left" onPress={handleClick.prev} />
            <Text style={CalendarStyles.topBarText}>{monthName} {calendar.year}</Text>
            <ArrowButton direction="right" onPress={handleClick.next} />
        </View>
    )
}
