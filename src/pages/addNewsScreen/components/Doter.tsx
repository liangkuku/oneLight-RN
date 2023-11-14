import { commonStyles } from "@/common/styles";
import { memo, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type DoterProps = {
    activeIndex: number,
    selfIndex: number
}

function Doter({ activeIndex, selfIndex }: DoterProps) {
    const sharedWidth = useSharedValue(20);
    const sharedHeight = useSharedValue(8);
    const sharedBackgroundColor = useSharedValue('#999999');
    const animatedDoterStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(sharedWidth.value, {
                duration: 300,
            }),
            height: withTiming(sharedHeight.value, {
                duration: 300,
            }),
            backgroundColor: withTiming(sharedBackgroundColor.value, {
                duration: 300,
            }),
        };
    });
    useEffect(() => {
        if (activeIndex === selfIndex) {
            sharedWidth.value = 8;
            sharedHeight.value = 20;
            sharedBackgroundColor.value = commonStyles.black;
        } else {
            sharedWidth.value = 20;
            sharedHeight.value = 8;
            sharedBackgroundColor.value = '#999999';
        }
    }, [activeIndex, selfIndex, sharedBackgroundColor, sharedHeight, sharedWidth]);
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.doter, animatedDoterStyle]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    doter: {
        borderRadius: 4
    }
});

const equalProps = (prevProps: DoterProps, nextProps: DoterProps) => {
    return prevProps.activeIndex !== nextProps.selfIndex && nextProps.activeIndex !== nextProps.selfIndex;
};

export default memo(Doter, equalProps);