import {TouchableOpacity, View} from 'react-native';
import OlText from '@/components/OneLightText';

function MarketScreen() {
  const tt = () => {
    Toast.show('自制Toast不牛广东东莞郭德纲');
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
        <View style={{width: 100, height: 100, backgroundColor: 'green'}}>
          <OlText>接口测试</OlText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MarketScreen;
