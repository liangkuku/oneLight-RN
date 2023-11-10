import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddNewsScreenContext } from "../utils/context";

function NewsTypeSwiper() {
    const { Tabs } = useContext(AddNewsScreenContext);
    return (
        <></>
    );
}

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
        backgroundColor: 'pink'
    }
});

export default NewsTypeSwiper;