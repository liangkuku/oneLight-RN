import { useContext, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddNewsScreenContext } from "../utils/context";
import Swiper from "react-native-swiper";
import FastImage from "react-native-fast-image";

function NewsTypeSwiper() {
    const { Tabs, newsTypeNameRef } = useContext(AddNewsScreenContext);
    const currentIndex = useRef(0);
    const onChangeSwiper = (index: number) => {
        if (index === 0 && currentIndex.current === (Tabs.length - 1)) {
            newsTypeNameRef?.current?.scrollBy?.(1);
        } else if (index === (Tabs.length - 1) && currentIndex.current === 0) {
            newsTypeNameRef?.current?.scrollBy?.(-1);
        } else {
            newsTypeNameRef?.current?.scrollBy?.(index - currentIndex.current);
        }
        currentIndex.current = index;
    };
    return (
        <Swiper showsPagination={false} onIndexChanged={onChangeSwiper}>
            {
                Tabs.map((tab) => (
                    <View key={tab.type} style={styles.swiperPage}>
                        {/* <Text>{tab.title}</Text> */}
                        <FastImage source={require('./iphone.png')} style={{ flex: 1 }} />
                    </View>
                ))
            }
        </Swiper>
    );
}

const styles = StyleSheet.create({
    swiperPage: {
        flex: 1,
        // backgroundColor: 'green'
    }
});

export default NewsTypeSwiper;