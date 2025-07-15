import { Gesture } from "react-native-gesture-handler";
import { runOnJS, SharedValue, useSharedValue, withTiming } from "react-native-reanimated";

export default function CalendarGesture(translateY: SharedValue<number>, changeMode: (mode: string) => void) {
    const startY = useSharedValue(0);
    let targetTranslateY = 0;

    const onStart = () => {
        startY.value = translateY.value;
    }

    const onUpdate = (event: any) => {
        targetTranslateY = event.translationY + startY.value;
        if (targetTranslateY > 0) {
            targetTranslateY = 0;
        }
        else if (targetTranslateY < -190) {
            targetTranslateY = -190;
        }
        if (targetTranslateY < -160) {
            runOnJS(changeMode)("week");
        } else {
            runOnJS(changeMode)("month");
        }
        translateY.value = targetTranslateY;
    }

    const onEnd = () => {
        const dragDistance = startY.value - translateY.value;
        if (translateY.value < -160 || (startY.value === 0 && dragDistance > 60)) {
            translateY.value = withTiming(-190);
            runOnJS(changeMode)("week");
        }
        else {
            translateY.value = withTiming(0);
            runOnJS(changeMode)("month");
        }
    }
    
    return Gesture.Pan()
        .onStart(onStart)
        .onUpdate(onUpdate)
        .onEnd(onEnd);
}
