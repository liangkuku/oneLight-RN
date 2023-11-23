import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AddNewsScreenContext } from "../utils/context";
import Swiper from "react-native-swiper";

function NewsTypeName() {
    const { Tabs, newsTypeNameRef } = useContext(AddNewsScreenContext);
    return (
        <View style={styles.container}>
            <Swiper
                ref={ref => { newsTypeNameRef.current = ref; }}
                horizontal={false}
                showsPagination={false}
                scrollEnabled={false}
            >
                {
                    Tabs.map((tab) => (
                        <View key={tab.type}>
                            <Text style={styles.typeName}>{tab.title}</Text>
                        </View>
                    ))
                }
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 30
    },
    typeName: {
        fontSize: 30,
        lineHeight: 40,
        fontWeight: '900'
    }
});

export default NewsTypeName;