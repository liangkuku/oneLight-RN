import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

const Tabs = [
    {
        desc: '待支付',
        icon: require('../static/waitpay1.png')
    },
    {
        desc: '进行中',
        icon: require('../static/inprogress1.png')
    },
    {
        desc: '待评价',
        icon: require('../static/evaluate1.png')
    },
    {
        desc: '售后/退款',
        icon: require('../static/refund1.png')
    },
    {
        desc: '全部',
        icon: require('../static/orders1.png')
    },
];

function OrdersBar() {
    return (
        <View style={styles.container}>
            {
                Tabs.map((item, index) => (
                    <View style={styles.item} key={index}>
                        <FastImage source={item.icon} resizeMode="contain" style={styles.img} />
                        <Text>{item.desc}</Text>
                    </View>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: commonStyles.pageBorderGap,
        paddingVertical: commonStyles.pageBorderGap,
        flexDirection: 'row',
        backgroundColor: commonStyles.white,
        borderRadius: commonStyles.pageBorderGap,
        ...getCommonShadowStyle({ shadowWidth: 5 })
    },
    item: {
        flex: 1,
        alignItems: 'center'
    },
    img: {
        width: '38%',
        aspectRatio: 1,
        marginBottom: 5
    }
});

export default OrdersBar;