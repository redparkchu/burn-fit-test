import { TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';

type Props = {
    direction: string,
    onPress: () => void
}

export default function ArroButton(props: Props) {
    const iconName = props.direction === "left" ? "arrow-back-ios-new" : "arrow-forward-ios";

    return (
        <TouchableOpacity onPress={props.onPress}>
            <Icon name={iconName} size={20} color="#0eb4fc"></Icon>
        </TouchableOpacity>
    )
}
