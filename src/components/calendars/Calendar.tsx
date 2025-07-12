import { View, Text } from "react-native";
import { CommonStyles } from "../../styles/Common.styles";

export default function Calendar() {
    return (
        <View style={CommonStyles.table}>
            <View style={[CommonStyles.row, CommonStyles.header, {width: '100%'}]}>
                <Text style={CommonStyles.cell}>TEST</Text>
                <Text style={CommonStyles.cell}>TEST</Text>
                <Text style={CommonStyles.cell}>TEST</Text>
            </View>
        </View>
    )
}
