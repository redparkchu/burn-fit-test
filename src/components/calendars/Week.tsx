import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { StyledDate } from "./Calendar";
import Date from "./Date";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
    index: number,
    styledDates: StyledDate[],
    selectedDate: string,
    setSelectedDate: (selectedDate: string) => void,
    translateY: SharedValue<number>
}

export default function Week(props: Props) {
    const targetIndex = 1;

    const animatedStyle = useAnimatedStyle(() => {
        const test = targetIndex * 40;
        const test2 = test * props.translateY.value / -190
        return {
            transform: [
                { translateY: -test2 },
            ]
        }
    });
    return (
        <Animated.View style={[CalendarStyles.row, animatedStyle]}>
            {props.styledDates.map((styledDate) => (
                <Date key={styledDate.date.id} 
                    color={styledDate.color} 
                    date={styledDate.date} 
                    selectedDate={props.selectedDate} 
                    setSelectedDate={props.setSelectedDate} 
                    translateY={props.translateY}
                    isTarget={props.index === targetIndex}
                />
            ))}
        </Animated.View>
    )
}
