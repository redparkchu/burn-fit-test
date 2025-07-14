import { Text, TouchableOpacity } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { DateUtil } from "../../utils/Calendar";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
    color: any,
    date: DateUtil,
    selectedDate: string,
    setSelectedDate: (selecteDate: string) => void,
    translateY: SharedValue<number>,
    isTarget: boolean
}

export default function Date(props: Props) {
    const date = props.date;
    const selectedStyle = props.selectedDate == date.id ? CalendarStyles.selected : CalendarStyles.unselected;
    const dateTextStyle = date.isToday() ? CalendarStyles.dateTextBold : CalendarStyles.dateText;
    const handleClick = () => {
        props.setSelectedDate(date.id);
    }

    const animatedStyle = useAnimatedStyle(() => {
        const opacity = props.isTarget ? 1 : 1 - props.translateY.value / -190
        return {
            opacity: opacity,
        }
    });

    return (
        <TouchableOpacity onPress={handleClick} style={CalendarStyles.cell}>
            <Animated.View style={[selectedStyle, animatedStyle]}>
                <Text style={[dateTextStyle, props.color]}>{date.date}</Text>
            </Animated.View>
        </TouchableOpacity>
    )
}
