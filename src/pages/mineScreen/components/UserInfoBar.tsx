import { commonStyles } from "@/common/styles";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { measure, runOnUI, useAnimatedRef } from "react-native-reanimated";
import { memo, useContext } from "react";
import { MineScreenContext } from "../utils/context";
import OlText from "@/components/OneLightText";

function UserInfoBar() {
    console.log('9898pagemine-UserInfo刷新了');
    const { userInfoBarHeight } = useContext(MineScreenContext);
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
            <OlText style={styles.userName}>CYXI</OlText>
            <View style={styles.userDesc}>
                <View style={styles.descItem}>
                    <OlText style={styles.label}>关注</OlText>
                    <OlText style={styles.descInfo}>123</OlText>
                </View>
                <View style={[styles.descItem, styles.border]}>
                    <OlText style={styles.label}>点赞</OlText>
                    <OlText style={styles.descInfo}>456</OlText>
                </View>
                <View style={styles.descItem}>
                    <OlText style={styles.label}>徽章</OlText>
                    <OlText style={styles.descInfo}>789</OlText>
                </View>
            </View>
            <View style={styles.avatarContainer}>
                <FastImage style={styles.avatar} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} resizeMode='cover' />
                <Icon name='female' size={20} color='#FF5370' solid={true} style={styles.editIcon} />
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: commonStyles.pageBorderGap
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: 22,
        fontWeight: '500',
        marginRight: 5
    },
    userDesc: {
        flexDirection: 'row',
        marginTop: 8
    },
    descItem: {
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    border: {
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: commonStyles.black
    },
    label: {
        fontSize: 12,
        color: commonStyles.grey_text,
        marginRight: 2
    },
    descInfo: {
        fontSize: 12
    },
    avatarContainer: {
        marginTop: 20,
        position: 'relative'
    },
    avatar: {
        width: 116,
        height: 116,
        borderRadius: 58,
    },
    editIcon: {
        position: 'absolute',
        top: 10,
        right: 0
    }
});

export default memo(UserInfoBar);