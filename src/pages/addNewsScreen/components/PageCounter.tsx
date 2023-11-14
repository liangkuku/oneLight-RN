import { forwardRef, useContext, useState, useImperativeHandle, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AddNewsScreenContext } from "../utils/context";
import Doter from "./Doter";
import Animated from "react-native-reanimated";

const PageCounter = forwardRef((props, ref) => {
    const { Tabs } = useContext(AddNewsScreenContext);
    const [activeIndex, setActiveIndex] = useState(0);
    useImperativeHandle(ref, () => ({
        setActiveIndex
    }));
    return (
        <View style={styles.container}>
            <Animated.View style={styles.typeEnText}>
                <Text style={styles.typeEn}>{Tabs[activeIndex]?.type}</Text>
            </Animated.View>
            <View style={styles.doterContainer}>
                {
                    Tabs.map((tab: any, index: number) => (
                        <Doter key={index} activeIndex={activeIndex} selfIndex={index} />
                    ))
                }
            </View>
        </View>
    );
});

PageCounter.displayName = 'PageCounter';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    typeEnText: {
        width: 500,
        height: 50,
        transform: [{ rotate: '-90deg' }],
        position: 'absolute',
        left: -225,
        top: -225,
        opacity: 0.3
    },
    typeEn: {
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 38,
        lineHeight: 50,
        letterSpacing: 10,
        color: '#667372'
    },
    doterContainer: {
        flexDirection: 'row',
    }
});

export default memo(PageCounter);