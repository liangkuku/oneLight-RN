import { View, StyleSheet } from "react-native";
import NewsTypeName from "./NewsTypeName";
import NewsTypeSwiper from "./NewsTypeSwiper";
import { AddNewsScreenContext } from "../utils/context";

const Tabs = [
    {
        title: '美食',
        type: 'food'
    },
    {
        title: '快递',
        type: 'express'
    },
    {
        title: 'Replace',
        type: 'replace'
    },
    {
        title: '兼职',
        type: 'job'
    },
];

function NewsTypeController() {
    const providerValue = {
        Tabs
    };
    return (
        <AddNewsScreenContext.Provider value={providerValue}>
            <View style={styles.container}>
                <NewsTypeName />
                <NewsTypeSwiper />
            </View>
        </AddNewsScreenContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default NewsTypeController;