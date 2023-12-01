import { TouchableOpacity, View } from 'react-native';
import OlText from '@/components/OneLightText';
import https from '@/utils/https';

function MarketScreen() {
  const tt1 = () => {
    https.get('/test/b?vv=23')
  };
  const tt2 = () => {
    https.get('/test/c')
  };
  return (
    <View
      style={{
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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

export default MarketScreen;
