import { commonStyles } from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MinePageContext } from "../utils/context";
import Animated, { measure, runOnUI, useAnimatedReaction, useAnimatedRef, useSharedValue, withTiming } from "react-native-reanimated";
import FastImage from "react-native-fast-image";

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

function TopBar() {
    const { sharedScrollY, userInfoBarHeight } = useContext(MinePageContext);
    const endSpaceBoxWidth = useSharedValue(0);
    const sharedWidth = useSharedValue(20);
    const sharedScale = useSharedValue(0);
    // 图标ref
    const animatedBellIconRef = useAnimatedRef();
    const animatedCogIconRef = useAnimatedRef();
    const getIconLayout = () => {
        runOnUI(() => {
            const bellMeasurement = measure(animatedBellIconRef);
            const cogMeasurement = measure(animatedCogIconRef);
            endSpaceBoxWidth.value = WINDOW_WIDTH - 2 * commonStyles.pageBorderGap - (bellMeasurement?.width || 23) - (cogMeasurement?.width || 23);
        })();
    };
    // 头部布局更改动画
    useAnimatedReaction(() => {
        return sharedScrollY.value;
    }, (cur, pre) => {
        if (pre < userInfoBarHeight.value && cur >= userInfoBarHeight.value) {
            sharedWidth.value = withTiming(endSpaceBoxWidth.value, {
                duration: 300
            });
            sharedScale.value = withTiming(1, {
                duration: 300
            });
        }
        if (pre >= userInfoBarHeight.value && cur < userInfoBarHeight.value) {
            sharedWidth.value = withTiming(20, {
                duration: 300
            });
            sharedScale.value = withTiming(0, {
                duration: 0
            });
        }
    });
    const aa = () => {
        console.log('9898我是设置按钮');
    };
    const bb = () => {
        console.log('9898我是信息按钮');
    };
    return (
        <Animated.View
            style={[styles.container, { paddingTop: getNavigationConsts().statusBarHeight }]}
            onLayout={getIconLayout}
        >
            <AnimatedIcon ref={animatedBellIconRef} name='bell' size={23} solid={true} color={commonStyles.black} onPress={bb} />
            <Animated.View style={[styles.spaceBox, { width: sharedWidth, transform: [{ scale: sharedScale }] }]} >
                <FastImage style={styles.avatarStyle} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} resizeMode='contain' />
                <Text style={styles.userName} numberOfLines={1} ellipsizeMode='middle'>CYXI</Text>
            </Animated.View>
            <AnimatedIcon ref={animatedCogIconRef} name='cog' size={23} color={commonStyles.black} onPress={aa} />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: commonStyles.pageBorderGap,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    spaceBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarStyle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        maxWidth: 100,
        color: commonStyles.black
    }
});

export default TopBar;