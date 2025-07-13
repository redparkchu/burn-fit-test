import { View, Text } from "react-native";
import { CalendarStyles } from "../../styles/calendars/Calendar.styles";
import { ColorStyles } from "../../styles/Color.styles";
import CalendarUtil from "../../utils/Calendar";
import Week from "./Week";

type Props = {
    month: number,
    year: number
}

export type StyledDate = {
    date: number,
    color: any
}

export default function Calendar(props: Props) {
    const calendarUtil = new CalendarUtil(props.year, props.month);
    const styledDates = toStyledDates(calendarUtil.weeks);

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
                <Week key={index} styledDates={item} />
            ))}
        </View>
    )
}

function toStyledDates(weeks: number[][]): StyledDate[][] {
    let color = ColorStyles.gray_30;
    const styledDates = weeks.map((week) => {
        return week.map((date) => {
            if (date === 1) {
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
