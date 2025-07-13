import { Text, TouchableOpacity, View } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";

type Props = {
    id: string,
    color: any,
    date: number,
    selectedDate: string,
    setSelectedDate: (selecteDate: string) => void
}

export default function Date(props: Props) {
    const handleClick = () => {
        props.setSelectedDate(props.id);
    }

    return (
        <TouchableOpacity onPress={handleClick} style={CalendarStyles.cell}>
            <View style={props.selectedDate == props.id ? CalendarStyles.selected : CalendarStyles.unselected}>
                <Text style={[{textAlign: 'center', lineHeight: 25}, props.color]}>{props.date}</Text>
            </View>
        </TouchableOpacity>
    )
}
