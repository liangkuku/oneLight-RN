import { commonStyles } from '@/common/styles';
import BlurBox from '@/components/BlurBox';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import Storage from '@/storage';
import { getNavigationConsts } from '@/utils/loadAppTools';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import TopBar from './components/TopBar';
import UserInfo from './components/UserInfo';
import { Navigation } from 'react-native-navigation';

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
                    paddingTop: getNavigationConsts().statusBarHeight
                }}
            >
                <TopBar />
                <UserInfo />
                <Text onPress={tt}>退出登录</Text>
                <Text onPress={goPage}>跳转跳转跳转跳转跳转</Text>
            </ScrollView>
            <BlurBox />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: commonStyles.pageBorderGap,
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
        height: 100,
        borderBlockColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'pink'
    },
    bb: {
        height: 100,
        borderBlockColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'green'
    },
    cc: {
        height: 100,
        borderBlockColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'blue'
    }
});

export default MineScreen;
