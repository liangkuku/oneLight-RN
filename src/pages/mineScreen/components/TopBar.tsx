import { commonStyles } from "@/common/styles";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

function TopBar() {
    const aa = () => {
        console.log('9898我是设置按钮')
    }
    const bb = () => {
        console.log('9898我是信息按钮')
    }
    return (
        <View style={styles.container}>
            <Icon name='cog' size={23} color={commonStyles.black} onPress={aa} />
            <Icon name='bell' size={23} solid={true} color={commonStyles.black} style={styles.bell} onPress={bb} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: commonStyles.pageBorderGap,
        height: 50,
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    bell: {
        marginRight: 20
    }
});

export default TopBar;