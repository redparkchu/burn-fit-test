import { View, Text } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { StyledDate } from "./Calendar";

type Props = {
    styledDates: StyledDate[]
}

export default function Week(props: Props) {
    return (
        <View style={CalendarStyles.row}>
            {props.styledDates.map((styledDate, index) => (
                <Text key={index} style={[CalendarStyles.cell, styledDate.color]}>{styledDate.date}</Text>
            ))}
        </View>
    )
}
