import { commonStyles } from "@/common/styles";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { measure, runOnUI, useAnimatedRef } from "react-native-reanimated";
import { memo, useContext } from "react";
import { MinePageContext } from "../utils/context";

function UserInfoBar() {
    console.log('9898pagemine-UserInfo刷新了');
    const { userInfoBarHeight } = useContext(MinePageContext);
    // 获取UserInfoBar布局信息
    const animatedUserInfoBarRef = useAnimatedRef();
    const getUserInfoBarLayout = () => {
        runOnUI(() => {
            const userInfoBarMeasurement = measure(animatedUserInfoBarRef);
            userInfoBarHeight.value = userInfoBarMeasurement?.height || 50;
        })();
    };
    return (
        <Animated.View style={styles.container} onLayout={getUserInfoBarLayout} ref={animatedUserInfoBarRef}>
            <FastImage style={styles.avatarStyle} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} resizeMode='contain' />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>CYXI</Text>
                <Icon name='female' size={20} color={'pink'} />
            </View>
            <Text style={styles.description}>@runner达人</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: commonStyles.pageBorderGap
    },
    avatarStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: commonStyles.pageBorderGap
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 5,
        color: commonStyles.black
    },
    description: {
        marginTop: commonStyles.pageBorderGap,
        color: commonStyles.grey_placeholder
    }
});

export default memo(UserInfoBar);