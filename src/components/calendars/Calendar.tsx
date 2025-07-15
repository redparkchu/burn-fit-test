import { useState } from "react";
import { View, Text } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { ColorStyles } from "../../styles/Color.styles";
import CalendarData from "../../data/calendars/CalendarData";
import DateData from "../../data/calendars/DateData";
import Week from "./Week";

type Props = {
    year: number,
    month: number,
    translateY: SharedValue<number>,
    calendarMode: string
}

export default function Calendar(props: Props) {
    const [selectedDateId, setSelectedDateId] = useState(DateData.getTodayId());
    const calendar = new CalendarData(props.year, props.month, selectedDateId, setSelectedDateId);
    calendar.changeStyled();
    const weekIndexs = [...Array(6).keys()];

    return (
        <View>
            <View style={[CalendarStyles.row, {zIndex: 1, backgroundColor: "#fff"}]}>
                <Text style={[CalendarStyles.cell, ColorStyles.red]}>Sun</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Mon</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Tue</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Wed</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Thu</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Fri</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.skyBlue]}>Sat</Text>
            </View>
            {weekIndexs.map((index) => (
                <Week key={index} 
                    index={index} 
                    calendar={calendar}
                    translateY={props.translateY}
                />
            ))}
        </View>
    )
}
