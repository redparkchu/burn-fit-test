import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
    app: {
        flex: 1
    },
    screen: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff'
    },
    center: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    table: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#999'
    },
    header: {
        backgroundColor: '#eee'
    },
    row: {
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#999',
        textAlign: 'center'
    }
});
