import { commonStyles } from "@/common/styles";
import { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import OlText from "@/components/OneLightText";

function Like() {
    const [status, setStatus] = useState(false);
    const changeStatus = () => {
        setStatus(!status);
    };
    return (
        <TouchableWithoutFeedback onPress={changeStatus}>
            <View style={styles.container}>
                <Icon name={status ? "cards-heart" : "cards-heart-outline"} size={22} color={commonStyles.black} />
                <OlText style={styles.text}>58</OlText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    text: {
        width: 30,
        textAlign: 'center',
        color: commonStyles.grey_placeholder
    }
});

export default Like;