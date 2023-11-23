import { View } from 'react-native';
import OlText from "@/components/OneLightText";

function MarketScreen() {
    return (
        <View style={{ backgroundColor: 'pink', flex: 1 }}>
            <OlText>我是聊天室</OlText>
            <OlText>我是聊天室</OlText>
            <OlText>我是聊天室</OlText>
            <OlText>我是聊天室</OlText>
            <OlText style={{ height: 30, backgroundColor: 'red' }}>我是聊天室</OlText>
            <OlText style={{ height: 30, backgroundColor: 'blue' }}>我是聊天室1</OlText>
            <OlText>我是聊天室2</OlText>
            <OlText>我是聊天室3</OlText>
            <OlText>我是聊天室4</OlText>
            <OlText>我是聊天室</OlText>
            <OlText>我是聊天室</OlText>
            <OlText>我是聊天室</OlText>
            <OlText>我是聊天室</OlText>
        </View>
    );
}

export default MarketScreen;
