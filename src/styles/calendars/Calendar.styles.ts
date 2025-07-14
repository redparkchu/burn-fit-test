import { StyleSheet } from "react-native";

export const CalendarStyles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    topBarText: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 20
    },
    row: {
        flexDirection: 'row',
        padding: 5
    },
    cell: {
        width: 30,
        height: 30,
        textAlign: 'center',
        margin: 'auto'
    },
    selected: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: "#0eb4fc",
        borderRadius: 50
    },
    unselected: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50
    },
    dateText: {
        textAlign: 'center', 
        lineHeight: 25
    },
    dateTextBold: {
        textAlign: 'center', 
        lineHeight: 25,
        fontWeight: 'bold'
    }
});
