import { ColorStyles } from "../../styles/Color.styles";

export default class DateData {
    id: string;
    year: number;
    month: number;
    date: number;
    color: any;
    

    constructor(year: number, month: number, date: number, color: any = ColorStyles.gray) {
        this.id = `${year}-${month}-${date}`;
        this.year = year;
        this.month = month;
        this.date = date;
        this.color = color;
    }

    setColor(color: any) {
        this.color = color
    }

    isToday() {
        return this.id === DateData.getTodayId();
    }

    static getTodayId() {
        const today = new Date();
        const id = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        return id;
    }
}
