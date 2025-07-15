import { ColorStyles } from "../../styles/Color.styles";
import DateData from "./DateData";

export type YearMonth = {
    year: number,
    month: number
}

export default class CalendarData {
    date: Date;
    lastDate: number;
    year: number;
    month: number;
    weeks: DateData[][];
    weekIndex: number;
    setWeekIndex: (weekIndex: number) => void;
    mode: string;
    selectedDateId: string;
    setSelectedDateId: ((dateId: string) => void);
    
    constructor(
        year: number, 
        month: number,
        weekIndex: number = 0,
        setWeekIndex: (weekIndex: number) => void,
        mode: string = "month"
    ) {
        this.date = new Date(year, month - 1, 1);
        this.lastDate = new Date(year, month, 0).getDate();
        this.year = year;
        this.month = month;
        this.weeks = Array(6).fill(0).map(() => Array(7).fill(new DateData(0, 0, 0)));
        this.weekIndex = weekIndex;
        this.setWeekIndex = setWeekIndex;
        this.mode = mode;
        this.selectedDateId = "";
        this.setSelectedDateId = (dateId: string) => { this.selectedDateId = dateId };
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
        const prevDate = CalendarData.getPrev(this.year, this.month);
        const year = prevDate.getFullYear();
        const month = prevDate.getMonth() + 1;
        const startDate = CalendarData.getPrev(this.year, this.month).getDate() - this.date.getDay() + 1;
        const week = this.weeks[0];
        let dayIndex = 0;

        while (week[dayIndex].date === 0) {
            week[dayIndex] = new DateData(year, month, startDate + dayIndex);
            dayIndex++;
        }
    }

    fillNextDate(weekIndex: number, dayIndex: number) {
        const nextDate = CalendarData.getNext(this.year, this.month);
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

    getMonthName() {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return monthNames[this.month - 1];
    }

    getPrevMonth() {
        return CalendarData.getPrev(this.year, this.month);
    }

    getNextMonth() {
        return CalendarData.getNext(this.year, this.month);
    }

    getPrevWeek() {
        if (this.weekIndex > 1) {
            this.weekIndex -= 1;
            return this.date;
        }

        const prevDate = CalendarData.getPrev(this.year, this.month);
        const firstDate = this.weeks[this.weekIndex][0].date;
        const lastWeekIndex: number = CalendarData.getLastWeekIndex(prevDate);

        if (this.weekIndex === 0 && firstDate !== 1) {
            this.weekIndex = lastWeekIndex - 1;
            return CalendarData.getPrev(this.year, this.month);
        }
        this.weekIndex = lastWeekIndex;
        return CalendarData.getPrev(this.year, this.month);
}

    static getLastWeekIndex(date: Date) {
        const lastDate = date.getDate();
        const day =date.getDay();

        if (lastDate === 28 && day === 6) {
            return 3;
        }
        if (lastDate === 30 && day === 0) {
            return 5;
        }
        if (lastDate === 31 && day <= 1) {
            return 5
        }
        return 4;
    }

    getNextWeek() {
        const week = this.weeks[this.weekIndex];
        if (week.some((date) => date.isIt(this.year, this.month, this.lastDate))) {
            if (week[6].date === this.lastDate) {
                this.weekIndex = 0;
            }
            this.weekIndex = 1;
            return CalendarData.getNext(this.year, this.month);
        }
        this.weekIndex += 1;
        return this.date;
    }

    saveWeekIndex() {
        this.setWeekIndex(this.weekIndex);
    }

    changeStyled() {
        this.weeks.forEach((week) => {
            week.forEach((date) => {
                this.setColorByMode(date);
            });
        });
    }

    setColorByMode(date: DateData) {
        if (this.mode === "week") {
            date.setColor(ColorStyles.gray);
        } else {
            date.setColorByYearMonth(this.year, this.month);
        }
    }

    getWeekByIndex(index: number) {
        return this.weeks[index];
    }

    getCurrentWeek() {
        return this.weeks[this.weekIndex];
    }

    changeWeekIndex() {
        if (this.mode === "month") {
            this.weekIndex = this.weeks[0][0].date === 1 ? 0 : 1;
            this.weeks.forEach((week, index) => {
                if (week.some((date) => date.id === this.selectedDateId)) {
                    this.weekIndex = index;
                }
            });
        }
    }

    isSelected(dateId: string) {
        return this.selectedDateId === dateId;
    }

    static getPrev(year: number, month: number) {
        if (month > 1) {
            return new Date(year, month - 1, 0);
        }
        return new Date(year, 0, 0);
    }
    
    static getNext(year: number, month: number) {
        if (month < 12) {
            return new Date(year, month, 1);
        }
        return new Date(year + 1, 0, 1);
    }

    static getWeekByDate(date: DateData) {
        let startDay = new Date(date.year, date.month -1, 1).getDay();
        let weekIndex = 0;
        let countDate = 0;

        while (countDate < date.date) {
            startDay++;
            countDate++;
            if (startDay === 7) {
                startDay = 0;
                weekIndex++;
            }
        }
        return weekIndex;
    }
}
