import { View, Text } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import ArrowButton from "./ArrowButton";

const testFunction = () => {
    alert("버튼이 눌렸다옹");
}

type Props = {
    month: number,
    year: number
}

export default function CalendarTopBar(props: Props) {
    const monthName = getMonthName(props.month);
    const year = props.year;

    return (
        <View style={CalendarStyles.topBar}>
            <ArrowButton direction="left" onPress={testFunction} />
            <Text style={CalendarStyles.dateText}>{monthName} {year}</Text>
            <ArrowButton direction="right" onPress={testFunction} />
        </View>
    )
}

function getMonthName(month: number) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return monthNames[month - 1];
}
