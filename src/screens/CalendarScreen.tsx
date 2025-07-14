import { useState } from "react";
import Calendar from "../components/calendars/Calendar";
import CalendarTopBar from "../components/calendars/CalendarTopBar";
import SafeAreaScreen from "./SafeAreaScreen";
import CalendarTab from "../components/calendars/CalendarTab";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function CalendarScreen() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const [monthYear, setMonthYear] = useState( {month: month, year: year} )

    const translateY = useSharedValue(0);
    const startY = useSharedValue(0);

    let targetTranslateY = 0;
    const panGesture = Gesture.Pan()
        .onStart((event) => {
            startY.value = translateY.value;
        })
        .onUpdate((event) => {
            targetTranslateY = event.translationY + startY.value;

            if (targetTranslateY > 0) {
                targetTranslateY = 0;
            }
            else if (targetTranslateY < -190) {
                targetTranslateY = -190;
            }
            translateY.value = targetTranslateY;
        })
        .onEnd((event, sucess) => {
            const dragDistance = startY.value - translateY.value;
            if (translateY.value < -160 || (startY.value === 0 && dragDistance > 60)) {
                translateY.value = withTiming(-190);
            }
            else {
                translateY.value = withTiming(0);
            }
        });
    return (
        <SafeAreaScreen>
            <CalendarTopBar monthYear={monthYear} setMonthYear={setMonthYear} />
            <Calendar year={monthYear.year} month={monthYear.month} translateY={translateY} />
            <GestureDetector gesture={panGesture}>
                <CalendarTab translateY={translateY}/>
            </GestureDetector>
        </SafeAreaScreen>
    )
}
