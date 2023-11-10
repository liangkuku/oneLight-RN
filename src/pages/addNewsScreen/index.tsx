import BlurBox from "@/components/BlurBox";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { StyleSheet, Text, View, Platform } from "react-native";

function AddNewsScreen() {
    const { statusBarHeight, bottomTabsHeight } = getNavigationConsts();
    return (
        <View style={[styles.page, { paddingTop: statusBarHeight, paddingBottom: bottomTabsHeight }]}>
            <Text>请选择，</Text>
            <Text>您想要发布的信息类型。</Text>
            <BlurBox />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        ...Platform.select({
            ios: {
                height: WINDOW_HEIGHT
            },
            android: {
                flex: 1
            }
        })
    },
    aa: {
        height: 100,
        backgroundColor: 'red'
    },
    bb: {
        height: 100,
        backgroundColor: 'black'
    }
});

export default AddNewsScreen;