import { View } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { StyledDate } from "./Calendar";
import Date from "./Date";

type Props = {
    styledDates: StyledDate[],
    selectedDate: string,
    setSelectedDate: (selectedDate: string) => void
}

export default function Week(props: Props) {
    return (
        <View style={CalendarStyles.row}>
            {props.styledDates.map((styledDate) => (
                <Date key={styledDate.date.id} color={styledDate.color} date={styledDate.date} selectedDate={props.selectedDate} setSelectedDate={props.setSelectedDate} />
            ))}
        </View>
    )
}
