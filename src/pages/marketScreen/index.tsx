import { StyleSheet, TouchableOpacity, View } from 'react-native';
import OlText from '@/components/OneLightText';
import https from '@/utils/https';
import { commonStyles } from '@/common/styles';

function MarketScreen() {
  const tt1 = async () => {
    const res = await https.get('/test/a?value=2');
    Toast.show(res.data.message);
  };
  const tt2 = async () => {
    const res = await https.get('/test/a?value=3');
    Toast.show(res.data.message);
  };
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={tt1}>
        <View style={{ width: 100, height: 100, backgroundColor: 'green' }}>
          <OlText>接口测试1</OlText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={tt2}>
        <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
          <OlText>接口测试2</OlText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: commonStyles.pageBgColor
  },
});

export default MarketScreen;
