import { useContext, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { AddNewsScreenContext } from "../utils/context";
import Swiper from "react-native-swiper";
import FastImage from "react-native-fast-image";
import { commonStyles } from "@/common/styles";
import OlText from "@/components/OneLightText";

function NewsTypeSwiper() {
    const { Tabs, newsTypeNameRef, pageCounterRef } = useContext(AddNewsScreenContext);
    const currentIndex = useRef(0);
    const onChangeSwiper = (index: number) => {
        if (index === 0 && currentIndex.current === (Tabs.length - 1)) {
            newsTypeNameRef?.current?.scrollBy?.(1);
        } else if (index === (Tabs.length - 1) && currentIndex.current === 0) {
            newsTypeNameRef?.current?.scrollBy?.(-1);
        } else {
            newsTypeNameRef?.current?.scrollBy?.(index - currentIndex.current);
        }
        pageCounterRef?.current?.setActiveIndex(index);
        currentIndex.current = index;
    };
    return (
        <View style={styles.container}>
            <Swiper showsPagination={false} onIndexChanged={onChangeSwiper} >
                {
                    Tabs.map((tab) => (
                        <View key={tab.type} style={styles.swiperPage}>
                            {/* <FastImage source={require('./iphone.png')} style={{ flex: 4 }} resizeMode='cover' /> */}
                            <FastImage source={tab.img1} style={{ flex: 4 }} resizeMode='cover' />
                            <View style={styles.descContainer}>
                                <OlText style={styles.contentTitle}>{tab.contentTitle}</OlText>
                                <OlText style={styles.contentDesc} numberOfLines={3}>{tab.contentDesc}</OlText>
                            </View>
                        </View>
                    ))
                }
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10
    },
    swiperPage: {
        flex: 1
    },
    descContainer: {
        flex: 1,
        paddingLeft: 60
    },
    contentTitle: {
        letterSpacing: 5,
        fontSize: 22,
        color: commonStyles.black_333,
        marginBottom: commonStyles.pageBorderGap
    },
    contentDesc: {
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 2,
        color: commonStyles.grey_text
    },
});

export default NewsTypeSwiper;