import { StyleSheet, View } from "react-native"
import TopBar from "./TopBar"
import { BlurView } from "@react-native-community/blur"
import { useContext } from "react"
import { MinePageContext } from "../utils/context"
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated"
import { commonStyles } from "@/common/styles"

function AnimatedHeader() {
    const { sharedScrollY } = useContext(MinePageContext);
    // 映射头部组件高斯模糊透明度动画样式
    const blurAnimatedStyle = useAnimatedStyle(() => {
        // opacity
        const opacity = interpolate(sharedScrollY.value, [50, 51], [0, 1], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { opacity };
    });
    return (
        <View>
            <Animated.View style={[styles.blurContainer, blurAnimatedStyle]}>
                <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />
            </Animated.View>
            <TopBar />
        </View>
    )
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

export default AnimatedHeader