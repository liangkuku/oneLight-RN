import { commonStyles } from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MinePageContext } from "../utils/context";
import Animated, { Layout, useAnimatedReaction, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

function TopBar() {
    const { sharedScrollY } = useContext(MinePageContext);
    const sharedLyout = useSharedValue('flex-end')
    // 头部布局更改动画
    useAnimatedReaction(() => {
        return sharedScrollY.value
    }, (cur, pre) => {
        console.log('9898cur', cur)
        console.log('9898pre', pre)
        if (pre < 50 && cur >= 50) {
            sharedLyout.value = 'space-between'
        }
        if (pre >= 50 && cur < 50) {
            sharedLyout.value = 'flex-end'
        }
    })
    // 映射头部组件高斯模糊透明度动画样式
    const layoutAnimatedStyle = useAnimatedStyle(() => {
        return { justifyContent: sharedLyout.value };
    });
    const aa = () => {
        console.log('9898我是设置按钮')
    }
    const bb = () => {
        console.log('9898我是信息按钮')
    }
    return (
        <Animated.View layout={Layout.duration(2000)} style={[styles.container, { justifyContent: sharedLyout.value }, { paddingTop: getNavigationConsts().statusBarHeight }]}>
            <Icon name='bell' size={23} solid={true} color={commonStyles.black} onPress={bb} />
            <Icon name='cog' size={23} color={commonStyles.black} onPress={aa} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: commonStyles.pageBorderGap,
        // justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    spaceBox: {
        width: 300,
        height: 5,
        backgroundColor: 'blue'
    }
});

export default TopBar;