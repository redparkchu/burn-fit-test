import { View } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { StyledDate } from "./Calendar";
import Date from "./Date";

type Props = {
    id: string,
    styledDates: StyledDate[],
    selectedDate: string,
    setSelectedDate: (selectedDate: string) => void
}

export default function Week(props: Props) {
    return (
        <View style={CalendarStyles.row}>
            {props.styledDates.map((styledDate, index) => (
                <Date key={`${props.id}-${index}`} id={`${props.id}-${index}${styledDate.date}`} color={styledDate.color} date={styledDate.date} selectedDate={props.selectedDate} setSelectedDate={props.setSelectedDate} />
            ))}
        </View>
    )
}
