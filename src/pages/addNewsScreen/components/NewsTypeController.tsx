import { View, StyleSheet } from "react-native";
import NewsTypeName from "./NewsTypeName";
import NewsTypeSwiper from "./NewsTypeSwiper";
import { AddNewsScreenContext } from "../utils/context";
import { useRef } from "react";

const Tabs = [
    {
        title: '美食',
        type: 'food',
        contentTitle: '激发健康',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp'
    },
    {
        title: '快递',
        type: 'express',
        contentTitle: '激发健康',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp'
    },
    {
        title: 'Replace',
        type: 'replace',
        contentTitle: '激发健康',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp'
    },
    {
        title: '兼职',
        type: 'job',
        contentTitle: '激发健康',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp'
    },
];

function NewsTypeController() {
    // news种类名称ref
    const newsTypeNameRef = useRef<any>();
    const providerValue = {
        Tabs,
        newsTypeNameRef
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