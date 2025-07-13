import { StyleSheet } from "react-native";

export const CalendarStyles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    dateText: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 20
    },
    row: {
        flexDirection: 'row',
        padding: 5
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        padding: 5
    }
});
