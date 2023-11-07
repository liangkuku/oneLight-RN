import { commonStyles } from '@/common/styles';
import BlurBox from '@/components/BlurBox';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import Storage from '@/storage';
import { getNavigationConsts } from '@/utils/loadAppTools';
import { ImageBackground, Platform, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import TopBar from './components/TopBar';
import UserInfo from './components/UserInfo';
import { Navigation } from 'react-native-navigation';
import BusinessInfoBar from './components/BusinessInfoBar';
import OrdersBar from './components/OrdersBar';
import ToolsBar from './components/ToolsBar';

function MineScreen({ componentId }) {
    const tt = () => {
        Storage.set(CONSTS_VALUE.LOGIN_STATUS, false);
    };
    const goPage = () => {
        Navigation.push(componentId, {
            component: {
                name: 'TestScreen'
            }
        });
    };
    return (
        <View style={styles.page}>
            <ScrollView
                contentInsetAdjustmentBehavior='never'
                bounces={false}
                contentContainerStyle={{
                    paddingBottom: getNavigationConsts().bottomTabsHeight,
                    paddingTop: getNavigationConsts().statusBarHeight,
                    paddingHorizontal: commonStyles.pageBorderGap
                }}
                stickyHeaderIndices={[2, 6]}
            >
                <TopBar />
                <UserInfo />
                <BusinessInfoBar />
                <OrdersBar />
                <ToolsBar />
                <Text onPress={tt}>退出登录</Text>
                <Text onPress={goPage}>跳转跳转跳转跳转跳转</Text>
                <View style={styles.aa} />
                <View style={styles.bb} />
                <View style={styles.aa} />
                <View style={styles.bb} />
                <View style={styles.aa} />
                <View style={styles.bb} />
                <View style={styles.aa} />
                <View style={styles.bb} />
            </ScrollView>
            <BlurBox />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        ...Platform.select({
            ios: {
                height: WINDOW_HEIGHT
            },
            android: {
                flex: 1
            }
        })
    },
    aa: {
        height: 150,
        backgroundColor: 'pink'
    },
    bb: {
        height: 150,
        backgroundColor: 'green'
    }
});

export default MineScreen;
