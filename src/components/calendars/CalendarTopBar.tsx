import { View, Text } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import ArrowButton from "./ArrowButton";
import Calendar, { DateUtil } from "../../utils/Calendar";

type Props = {
    dateUtil: DateUtil,
    setDateUtil: (dateUtil: DateUtil) => void
}

export default function CalendarTopBar(props: Props) {
    const month = props.dateUtil.month
    const monthName = getMonthName(month);
    const year = props.dateUtil.year;

    const prevMonth = () => {
        const prevDate = Calendar.getPrev(month, year);
        const dateUtil = { month: prevDate.getMonth() + 1, year: prevDate.getFullYear() };
        props.setDateUtil(dateUtil);
    }
    
    const nextMonth = () => {
        const nextDate = Calendar.getNext(month, year);
        const dateUtil = { month: nextDate.getMonth() + 1, year: nextDate.getFullYear() };
        props.setDateUtil(dateUtil);
    }

    return (
        <View style={CalendarStyles.topBar}>
            <ArrowButton direction="left" onPress={prevMonth} />
            <Text style={CalendarStyles.dateText}>{monthName} {year}</Text>
            <ArrowButton direction="right" onPress={nextMonth} />
        </View>
    )
}

function getMonthName(month: number) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthNames[month - 1];
}
