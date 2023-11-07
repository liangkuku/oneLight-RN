import { commonStyles } from "@/common/styles";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

function TopBar() {
    return (
        <View style={styles.container}>
            <Icon name='cog' size={23} color={commonStyles.black} />
            <Icon name='bell' size={23} solid={true} color={commonStyles.black} style={styles.bell} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    bell: {
        marginRight: 20
    }
});

export default TopBar;