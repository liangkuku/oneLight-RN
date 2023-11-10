import { StyleSheet } from "react-native";
import TopBar from "./TopBar";
import { BlurView } from "@react-native-community/blur";
import { memo, useContext } from "react";
import { MinePageContext } from "../utils/context";
import Animated, { useAnimatedReaction, useAnimatedRef, useSharedValue } from "react-native-reanimated";
import { commonStyles } from "@/common/styles";

function AnimatedHeader() {
    console.log('9898pagemine-AnimatedHeader刷新了');
    const { sharedScrollY } = useContext(MinePageContext);
    const sharedOpacity = useSharedValue(0);
    // hearder的ref
    const animatedHeaderRef = useAnimatedRef();
    // 头部布局更改动画
    useAnimatedReaction(() => {
        return sharedScrollY.value;
    }, (cur, pre) => {
        if (pre < commonStyles.pageBorderGap && cur >= commonStyles.pageBorderGap) {
            sharedOpacity.value = 1;
        }
        if (pre >= commonStyles.pageBorderGap && cur < commonStyles.pageBorderGap) {
            sharedOpacity.value = 0;
        }
    });
    return (
        <Animated.View ref={animatedHeaderRef}>
            <Animated.View style={[styles.blurContainer, { opacity: sharedOpacity }]}>
                <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />
            </Animated.View>
            <TopBar />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
    }
});

export default memo(AnimatedHeader);