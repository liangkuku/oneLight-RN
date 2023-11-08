import { commonStyles } from "@/common/styles";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from 'react-native-vector-icons/Ionicons';

function UserInfo() {
    console.log('9898pagemine-UserInfo刷新了');
    return (
        <View style={styles.container}>
            <FastImage style={styles.avatarStyle} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} resizeMode='contain' />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>CYXI</Text>
                <Icon name='female' size={20} color={'pink'} />
            </View>
            <Text style={styles.description}>@runner达人</Text>
        </View>
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

export default UserInfo;