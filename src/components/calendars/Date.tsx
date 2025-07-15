import { Text, TouchableOpacity } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import CalendarData from "../../data/calendars/CalendarData";
import DateData from "../../data/calendars/DateData";

type Props = {
    calendar: CalendarData,
    date: DateData,
    isDisplayed: boolean,
    translateY: SharedValue<number>,
    weekIndex: number
}

export default function Date(props: Props) {
    const calendar = props.calendar;
    const date = props.date;
    const selectedStyle = calendar.isSelected(date.id) ? CalendarStyles.selected : CalendarStyles.unselected;
    const dateTextStyle = date.isToday() ? CalendarStyles.dateTextBold : CalendarStyles.dateText;
    const handleClick = () => {
        calendar.setSelectedDateId(date.id);
        calendar.setWeekIndex(props.weekIndex);
    }

    const animatedStyle = useAnimatedStyle(() => {
        const opacity = props.isDisplayed ? 1 : 1 - props.translateY.value / -190;
        return {
            opacity: opacity,
        }
    });

    return (
        <TouchableOpacity onPress={handleClick} style={CalendarStyles.cell}>
            <Animated.View style={[selectedStyle, animatedStyle]}>
                <Text style={[dateTextStyle, date.color]}>{date.date}</Text>
            </Animated.View>
        </TouchableOpacity>
    )
}
