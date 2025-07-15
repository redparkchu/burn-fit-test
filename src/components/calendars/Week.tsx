import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { StyledDate } from "./Calendar";
import Date from "./Date";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
    index: number,
    styledDates: StyledDate[],
    selectedDate: string,
    setSelectedDate: (selectedDate: string) => void,
    translateY: SharedValue<number>,
    targetIndex: number
}

export default function Week(props: Props) {
    const animatedStyle = useAnimatedStyle(() => {
        const distance = props.targetIndex * 40;
        const translateY = -(distance * props.translateY.value / -190)
        return {
            transform: [
                { translateY: translateY },
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
                    isTarget={props.index === props.targetIndex}
                />
            ))}
        </Animated.View>
    )
}
