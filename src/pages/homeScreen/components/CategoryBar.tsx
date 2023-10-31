import { useCallback, useContext, useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { HomePageContext } from "../utils/context";
import { FlatList } from "react-native";

const tabs = [
    {
        title: '全部',
        img: require('../static/all.png'),
        id: '0'
    },
    {
        title: '美食',
        img: require('../static/food.png'),
        id: '1'
    },
    {
        title: '快递',
        img: require('../static/express.png'),
        id: '2'
    },
    {
        title: 'Replace',
        img: require('../static/class.png'),
        id: '3'
    },
    {
        title: '兼职',
        img: require('../static/job.png'),
        id: '4'
    },
];

function CategoryBar() {
    console.log('9898123分类bar刷新');
    const { newsListContainerRef, categoryBarRef, sharedScrollY, allTypeListScrollY, allTypeListRef } = useContext(HomePageContext);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const changeActiveTab = useCallback((index: number, from: 'categoryBar' | 'listContainer' = 'categoryBar') => {
        console.log('9898zz11', index, activeTabIndex, sharedScrollY.value);
        // 动画补偿
        console.log('9898zz33');
        if (index === activeTabIndex) return;
        if (sharedScrollY.value < 90 && index !== 0) {
            sharedScrollY.value = 90;
        }
        if (allTypeListScrollY.value < 90 && index === 0 && index !== activeTabIndex) {
            allTypeListRef?.current?.scrollToOffset?.({ offset: 90, animated: true });
        }
        console.log('9898zz44');
        setActiveTabIndex(index);
        categoryBarRef?.current?.scrollToIndex?.({
            index,
            animated: true,
            viewPosition: 0.5
        });
        if (from === 'categoryBar') {
            newsListContainerRef?.current?.scrollToIndex?.({ index, animated: true });
        }
    }, [activeTabIndex, allTypeListRef, allTypeListScrollY.value, categoryBarRef, newsListContainerRef, sharedScrollY]);
    useEffect(() => {
        categoryBarRef.current.changeActiveTab = changeActiveTab;
    }, [categoryBarRef, changeActiveTab]);
    return (
        <FlatList
            ref={ref => { categoryBarRef.current = ref; }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            removeClippedSubviews={true}
            data={tabs}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => <CategoryItem categoryInfo={item} changeActiveTab={changeActiveTab} selfIndex={index} activeTabIndex={activeTabIndex} />}
        />
    );
}

CategoryBar.displayName = 'CategoryBar';

export default CategoryBar;