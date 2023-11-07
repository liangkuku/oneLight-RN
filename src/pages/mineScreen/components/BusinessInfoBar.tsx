import { commonStyles } from "@/common/styles";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


function BusinessInfoBar() {
    return (
        <LinearGradient
            style={styles.container}
            colors={['#2a2a2a', '#080808', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0.2, 0.7, 1]}
        >
            <View style={styles.item}>
                <Text style={styles.num}>13K</Text>
                <Text style={styles.desc}>积分</Text>
            </View>
            <View style={[styles.item, styles.itemBorder]}>
                <Text style={styles.num}>23</Text>
                <Text style={styles.desc}>关注</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.num}>268</Text>
                <Text style={styles.desc}>获赞</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 15
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    itemBorder: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: '#646464'
    },
    num: {
        color: commonStyles.white,
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 5
    },
    desc: {
        color: commonStyles.grey_placeholder,
        fontWeight: 'bold',
    }
})
export default BusinessInfoBar;