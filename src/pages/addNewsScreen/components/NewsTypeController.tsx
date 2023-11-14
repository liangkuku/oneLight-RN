import { View, StyleSheet } from "react-native";
import NewsTypeName from "./NewsTypeName";
import NewsTypeSwiper from "./NewsTypeSwiper";
import { AddNewsScreenContext } from "../utils/context";
import { useRef } from "react";
import PageCounter from "./PageCounter";

const Tabs = [
    {
        title: '美食',
        type: 'food',
        contentTitle: '美食',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp',
        img1: require('../static/photo1.png')
    },
    {
        title: '快递',
        type: 'express',
        contentTitle: '快递',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp',
        img1: require('../static/photo2.png')
    },
    {
        title: 'Replace',
        type: 'replace',
        contentTitle: 'Replace',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费,深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp',
        img1: require('../static/photo1.png')
    },
    {
        title: '兼职',
        type: 'job',
        contentTitle: '兼职',
        contentDesc: '深刻的肌肤司法局谁，富家女口味加奶粉，为哦既然你快上课吗发客服了解富可敌国快递费。',
        img: 'https://gw.alicdn.com/imgextra/i4/1917047079/O1CN01EhFuvM22AEcred60V_!!1917047079.jpg_Q75.jpg_.webp',
        img1: require('../static/photo2.png')
    },
];

function NewsTypeController() {

    // news种类名称ref
    const newsTypeNameRef = useRef<any>();
    const pageCounterRef = useRef();
    const providerValue = {
        Tabs,
        newsTypeNameRef,
        pageCounterRef
    };
    return (
        <AddNewsScreenContext.Provider value={providerValue}>
            <View style={styles.container}>
                <NewsTypeName />
                <NewsTypeSwiper />
                <PageCounter ref={pageCounterRef} />
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