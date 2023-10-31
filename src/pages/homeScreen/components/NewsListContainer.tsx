import TypeNewsList from "./TypeNewsList";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { useContext } from "react";
import { HomePageContext } from "../utils/context";
import { FlashList } from "@shopify/flash-list";

const tabs = [
    {
        label: '全部',
        id: '0'
    },
    {
        label: '美食',
        id: '1'
    },
    {
        label: '快递',
        id: '2'
    },
    {
        label: 'Replace',
        id: '3'
    },
    {
        label: '兼职',
        id: '4'
    },
];

function NewsListContainer() {
    const { newsListContainerRef, categoryBarRef } = useContext(HomePageContext);
    const endScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const tmp = (offsetX / WINDOW_WIDTH + 0.5);
        const currentPage = Math.trunc(tmp);
        categoryBarRef?.current?.changeActiveTab?.(currentPage, 'listContainer');
    };
    return (
        <FlashList
            ref={ref => { newsListContainerRef.current = ref; }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            removeClippedSubviews={true}
            data={tabs}
            keyExtractor={(item) => item.id}
            renderItem={({ index }) => <TypeNewsList isAll={index === 0} />}
            onMomentumScrollEnd={endScroll}
            estimatedItemSize={WINDOW_WIDTH}
        />
    );
}

export default NewsListContainer;