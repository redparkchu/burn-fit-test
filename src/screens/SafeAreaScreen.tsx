import { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CommonStyles } from "../styles/Common.styles";

type Props = {
    children: ReactNode
}

export default function SafeAreaScreen(props: Props) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[CommonStyles.screen, {paddingTop: insets.top}]}>
            {props.children}
        </View>
    )
}
