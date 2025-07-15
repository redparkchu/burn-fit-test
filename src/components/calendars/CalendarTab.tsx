import { View, Text } from "react-native";
import Animated, { SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";

type Props = {
    translateY: SharedValue<number>
}

export default function CalendarTab(props: Props) {
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: props.translateY.value },
            ]
        };
    });

    return (
        <Animated.View style={[CalendarStyles.calendarTab, animatedStyle]}>
            <View style={CalendarStyles.row}>
                <Text style={CalendarStyles.cell}>식단</Text>
                <Text style={CalendarStyles.cell}>운동</Text>
                <Text style={CalendarStyles.cell}>신체</Text>
            </View>
        </Animated.View>
    )
}
