import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AddNewsScreenContext } from "../utils/context";
import Swiper from "react-native-swiper";

function NewsTypeName() {
    const { Tabs, newsTypeNameRef } = useContext(AddNewsScreenContext);
    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.desc}>想要发布的是：</Text>
            </View>
            <Swiper
                ref={ref => { newsTypeNameRef.current = ref; }}
                style={styles.swiper}
                height={100}
                horizontal={false}
                showsPagination={false}
                scrollEnabled={false}
            >
                {
                    Tabs.map((tab) => (
                        <View key={tab.type} style={styles.swiperPage}>
                            <Text>{tab.title}</Text>
                        </View>
                    ))
                }
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flexDirection: 'row',
        paddingVertical: 10,
        alignContent: 'center'
    },
    label: {
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    desc: {
        color: '#86868B',
        fontSize: 16,
        fontWeight: 'bold'
    },
    swiper: {
        backgroundColor: 'pink',
    },
    swiperPage: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default NewsTypeName;