import { View } from "react-native";
import OlText from "@/components/OneLightText";

type EmptyComponentProps = {
    isShow: boolean
}
function EmptyComponent(props: EmptyComponentProps) {
    const { isShow = false } = props;
    return (
        isShow && (
            <View style={{ backgroundColor: 'green', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, marginVertical: 10, backgroundColor: 'yellow' }}>
                    <OlText>空页面1</OlText>
                </View>
                <View style={{ width: 50, height: 50, marginVertical: 10, backgroundColor: 'yellow' }}>
                    <OlText>空页面2</OlText>
                </View>
            </View>
        )
    );
}

export default EmptyComponent;