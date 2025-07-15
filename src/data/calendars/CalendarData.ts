import { ColorStyles } from "../../styles/Color.styles";
import DateData from "./DateData";

export type MonthYear = {
    month: number,
    year: number
}

export type StyledDate = {
    date: DateData,
    color: any
}

export default class CalendarData {
    date: Date;
    lastDate: number;
    year: number;
    month: number;
    weeks: DateData[][];
    selectedDateId: string = "";
    setSelectedDateId: ((dateId: string) => void) = (dateId: string) => { this.selectedDateId = dateId };
    
    constructor(
        year: number, 
        month: number, 
        selectedDateId: string = "", 
        setSelectedDateId: ((dateId: string) => void) = (dateId: string) => { this.selectedDateId = dateId }
    ) {
        this.date = new Date(year, month - 1, 1);
        this.lastDate = new Date(year, month, 0).getDate();
        this.year = year;
        this.month = month;
        this.weeks = Array(6).fill(0).map(() => Array(7).fill(new DateData(0, 0, 0)));
        this.selectedDateId = selectedDateId;
        this.setSelectedDateId = setSelectedDateId;

        this.initWeeks();
    }

    initWeeks() {
        let dayIndex = this.date.getDay();
        let weekIndex = 0;
        let date = 1;

        while (date <= this.lastDate) {
            this.weeks[weekIndex][dayIndex] = new DateData(this.year, this.month, date);
            date++;
            dayIndex++;
            if (dayIndex === 7) {
                dayIndex = 0;
                weekIndex++;
            }
        }
        this.fillPrevDate();
        this.fillNextDate(weekIndex, dayIndex);
    }

    fillPrevDate() {
        const prevDate = CalendarData.getPrev(this.month, this.year);
        const year = prevDate.getFullYear();
        const month = prevDate.getMonth() + 1;
        const startDate = CalendarData.getPrev(this.month, this.year).getDate() - this.date.getDay() + 1;
        const week = this.weeks[0];
        let dayIndex = 0;

        while (week[dayIndex].date === 0) {
            week[dayIndex] = new DateData(year, month, startDate + dayIndex);
            dayIndex++;
        }
    }

    fillNextDate(weekIndex: number, dayIndex: number) {
        const nextDate = CalendarData.getNext(this.month, this.year);
        const year = nextDate.getFullYear();
        const month = nextDate.getMonth() + 1;
        let date = 1;
        
        while (weekIndex < 6) {
            this.weeks[weekIndex][dayIndex] = new DateData(year, month, date);
            date++;
            dayIndex++;
            if (dayIndex === 7) {
                dayIndex = 0;
                weekIndex++;
            }
        }
    }

    changeStyled() {
        let color = ColorStyles.gray_30;

        this.weeks.forEach((week) => {
            week.forEach((date) => {
                if (date.date === 1) {
                    color = this.changeColor(color);
                }
                date.setColor(color);
            });
        });
    }
    
    changeColor(color: any) {
        return color === ColorStyles.gray_30 ? ColorStyles.gray : ColorStyles.gray_30;
    }

    getWeekByIndex(index: number) {
        return this.weeks[index];
    }

    getWeekIndexByDateId() {
        let targetIndex = this.weeks[0][0].date === 1 ? 0 : 1;
        this.weeks.forEach((week, index) => {
            if (week.some((date) => date.id === this.selectedDateId)) {
                targetIndex = index;
            }
        });
        return targetIndex
    }

    isSelected(dateId: string) {
        return this.selectedDateId === dateId;
    }

    static getPrev(month: number, year: number) {
        if (month > 1) {
            return new Date(year, month - 1, 0);
        }
        return new Date(year, 0, 0);
    }
    
    static getNext(month: number, year: number) {
        if (month < 12) {
            return new Date(year, month, 1);
        }
        return new Date(year + 1, 0, 1);
    }
}
