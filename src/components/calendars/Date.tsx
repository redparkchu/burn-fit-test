import { Text, TouchableOpacity, View } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { DateUtil } from "../../utils/Calendar";

type Props = {
    color: any,
    date: DateUtil,
    selectedDate: string,
    setSelectedDate: (selecteDate: string) => void
}

export default function Date(props: Props) {
    const date = props.date;
    const selectedStyle = props.selectedDate == date.id ? CalendarStyles.selected : CalendarStyles.unselected;
    const dateTextStyle = date.isToday() ? CalendarStyles.dateTextBold : CalendarStyles.dateText;
    const handleClick = () => {
        props.setSelectedDate(date.id);
    }

    return (
        <TouchableOpacity onPress={handleClick} style={CalendarStyles.cell}>
            <View style={selectedStyle}>
                <Text style={[dateTextStyle, props.color]}>{date.date}</Text>
            </View>
        </TouchableOpacity>
    )
}
