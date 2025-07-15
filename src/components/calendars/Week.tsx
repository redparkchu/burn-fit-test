import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import CalendarData from "../../data/calendars/CalendarData";
import Date from "./Date";

type Props = {
    index: number,
    calendar: CalendarData,
    translateY: SharedValue<number>
}

export default function Week(props: Props) {
    const calendarData = props.calendar;
    const week = calendarData.getWeekByIndex(props.index);
    const targetIndex = calendarData.getWeekIndexByDateId();
    const animatedStyle = useAnimatedStyle(() => {
        const distance = targetIndex * 40;
        const translateY = -(distance * props.translateY.value / -190)
        return {
            transform: [
                { translateY: translateY },
            ]
        }
    });
    
    return (
        <Animated.View style={[CalendarStyles.row, animatedStyle]}>
            {week.map((date) => (
                <Date key={date.id}
                    calendar={props.calendar} 
                    date={date}
                    isDisplayed={props.index === targetIndex}
                    translateY={props.translateY}
                />
            ))}
        </Animated.View>
    )
}
