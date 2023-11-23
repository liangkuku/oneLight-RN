import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import OlText from "@/components/OneLightText";

type NewsProps = {
    news: NewsItem
}

function PublisherInfo({ news }: NewsProps) {
    return (
        <View style={styles.container}>
            <FastImage source={{ uri: news.avatar }} style={styles.avatar} resizeMode="cover" />
            <OlText style={styles.publisherName}>{news.publisherName}</OlText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    publisherName: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10
    },
});

export default PublisherInfo;