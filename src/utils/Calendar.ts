export type DateUtil = {
    month: number,
    year: number
}

export default class Calendar {
    date: Date;
    lastDate: number;
    year: number;
    month: number;
    weeks: number[][];
    
    constructor(monthYear: DateUtil) {
        this.date = new Date(monthYear.year, monthYear.month - 1, 1);
        this.lastDate = new Date(monthYear.year, monthYear.month, 0).getDate();
        this.year = monthYear.year;
        this.month = monthYear.month;
        this.weeks = Array(6).fill(0).map(() => Array(7).fill(0));

        this.initWeeks();
    }

    initWeeks() {
        let dayIndex = this.date.getDay();
        let weekIndex = 0;
        let date = 1;

        while (date <= this.lastDate) {
            this.weeks[weekIndex][dayIndex] = date;
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
        const startDate = Calendar.getPrev(this.month, this.year).getDate() - this.date.getDay() + 1;
        const week = this.weeks[0];
        let dayIndex = 0;

        while (week[dayIndex] === 0) {
            week[dayIndex] = startDate + dayIndex;
            dayIndex++;
        }
    }

    fillNextDate(weekIndex: number, dayIndex: number) {
        let date = 1;
        
        while (weekIndex < 6) {
            this.weeks[weekIndex][dayIndex] = date;
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
