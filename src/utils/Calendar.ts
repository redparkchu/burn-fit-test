export type MonthYear = {
    month: number,
    year: number
}

export class DateUtil {
    id: string;
    year: number;
    month: number;
    date: number;

    constructor(year: number, month: number, date: number) {
        this.id = `${year}-${month}-${date}`;
        this.year = year;
        this.month = month;
        this.date = date;
    }

    isToday() {
        const today = new Date();
        return this.year === today.getFullYear() 
            && this.month === today.getMonth() + 1 
            && this.date === today.getDate();
    }
}

export default class Calendar {
    date: Date;
    lastDate: number;
    year: number;
    month: number;
    weeks: DateUtil[][];
    
    constructor(year: number, month: number) {
        this.date = new Date(year, month - 1, 1);
        this.lastDate = new Date(year, month, 0).getDate();
        this.year = year;
        this.month = month;
        this.weeks = Array(6).fill(0).map(() => Array(7).fill(new DateUtil(0, 0, 0)));

        this.initWeeks();
    }

    initWeeks() {
        let dayIndex = this.date.getDay();
        let weekIndex = 0;
        let date = 1;

        while (date <= this.lastDate) {
            this.weeks[weekIndex][dayIndex] = new DateUtil(this.year, this.month, date);
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
        const prevDate = Calendar.getPrev(this.month, this.year);
        const year = prevDate.getFullYear();
        const month = prevDate.getMonth() + 1;
        const startDate = Calendar.getPrev(this.month, this.year).getDate() - this.date.getDay() + 1;
        const week = this.weeks[0];
        let dayIndex = 0;

        while (week[dayIndex].date === 0) {
            week[dayIndex] = new DateUtil(year, month, startDate + dayIndex);
            dayIndex++;
        }
    }

    fillNextDate(weekIndex: number, dayIndex: number) {
        const nextDate = Calendar.getNext(this.month, this.year);
        const year = nextDate.getFullYear();
        const month = nextDate.getMonth() + 1;
        let date = 1;
        
        while (weekIndex < 6) {
            this.weeks[weekIndex][dayIndex] = new DateUtil(year, month, date);
            date++;
            dayIndex++;
            if (dayIndex === 7) {
                dayIndex = 0;
                weekIndex++;
            }
        }
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
