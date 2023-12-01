import { TouchableOpacity, View } from 'react-native';
import OlText from '@/components/OneLightText';
import https from '@/utils/https';

function MarketScreen() {
  const tt = () => {
    https.get('/test/a')
  };
  return (
    <View
      style={{
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={tt}>
        <View style={{ width: 100, height: 100, backgroundColor: 'green' }}>
          <OlText>接口测试</OlText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MarketScreen;
