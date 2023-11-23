import { commonStyles } from "@/common/styles";
import { StyleSheet, View } from "react-native";
import OlText from "@/components/OneLightText";

function PayInfoBar() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <OlText style={styles.num}>119</OlText>
                <OlText style={styles.desc}>积分</OlText>
            </View>
            <View style={styles.item}>
                <OlText style={styles.num}>10</OlText>
                <OlText style={styles.desc}>优惠券</OlText>
            </View>
            <View style={styles.item}>
                <OlText style={styles.num}>298</OlText>
                <OlText style={styles.desc}>余额</OlText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: commonStyles.pageBorderGap
    },
    item: {
        flex: 1,
        alignItems: 'center',
    },
    num: {
        fontSize: 21,
        fontWeight: '900',
        marginBottom: 5
    },
    desc: {
        color: commonStyles.black_333
    }
});

export default PayInfoBar;