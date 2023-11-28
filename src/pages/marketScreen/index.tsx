import {TouchableOpacity, View} from 'react-native';
import OlText from '@/components/OneLightText';
import https from '@/utils/https';
import {RootSiblingParent} from 'react-native-root-siblings';

function MarketScreen() {
  const tt = () => {
    https.get('/test/a');
  };
  return (
    <RootSiblingParent>
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
    </RootSiblingParent>
  );
}

export default MarketScreen;
