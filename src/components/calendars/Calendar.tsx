import { View, Text } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { ColorStyles } from "../../styles/Color.styles";
import CalendarUtil, { DateUtil } from "../../utils/Calendar";
import Week from "./Week";
import { useState } from "react";

type Props = {
    year: number,
    month: number
}

export type StyledDate = {
    date: DateUtil,
    color: any
}

export default function Calendar(props: Props) {
    const calendarUtil = new CalendarUtil(props.year, props.month);
    const styledDates = toStyledDates(calendarUtil.weeks);
    const [selectedDate, setSelectedDate] = useState("");

    return (
        <View>
            <View style={CalendarStyles.row}>
                <Text style={[CalendarStyles.cell, ColorStyles.red]}>Sun</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Mon</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Tue</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Wed</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Thu</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.gray_60]}>Fri</Text>
                <Text style={[CalendarStyles.cell, ColorStyles.skyBlue]}>Sat</Text>
            </View>
            {styledDates.map((item, index) => (
                <Week key={index} styledDates={item} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            ))}
        </View>
    )
}

function toStyledDates(weeks: DateUtil[][]): StyledDate[][] {
    let color = ColorStyles.gray_30;
    const styledDates = weeks.map((week) => {
        return week.map((date) => {
            if (date.date === 1) {
                color = changeColor(color);
            }
            return {date: date, color: color}
        });
    });
    return styledDates;
}

function changeColor(color: any) {
    return color === ColorStyles.gray_30 ? ColorStyles.gray : ColorStyles.gray_30;
}
