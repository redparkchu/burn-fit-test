export default class Calendar {
    date: Date;
    lastDate: number;
    year: number;
    month: number;
    weeks: number[][];
    
    constructor(year: number, month: number) {
        this.date = new Date(year, month - 1, 1);
        this.lastDate = new Date(year, month, 0).getDate();
        this.year = year;
        this.month = month;
        this.weeks = Array(6).fill(0).map(() => Array(7).fill(0));

        this.initWeeks();
    }

    initWeeks() {
        let day = this.date.getDay();
        let weekIndex = 0;
        let date = 1;

        while (date <= this.lastDate) {
            this.weeks[weekIndex][day] = date;
            date++;
            day++;
            if (day === 7) {
                day = 0;
                weekIndex++;
            }
        }
    }

    // getPrev() {
    //     if (this.month > 1) {
    //         return new Date(this.year, this.month - 1, 0);
    //     }
    //     return new Date(this.year, 0, 0);
    // }
    
    // getNext() {
    //     if (this.month < 12) {
    //         return new Date(this.year, this.month, 1);
    //     }
    //     return new Date(this.year + 1, 0, 1);
    // }
}
