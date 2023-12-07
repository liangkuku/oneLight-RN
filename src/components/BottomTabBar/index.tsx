import { StyleSheet, View } from 'react-native';
import OlText from '../OneLightText';
import { BlurView } from '@react-native-community/blur';
import BarItem from './components/BarItem';
import PublishTool from './components/PublishTool';

function BottomTabBar({ state, descriptors, navigation }) {
  console.log('9898state', state);
  console.log('9898descriptors', descriptors);
  console.log('9898navigation', navigation);
  return (
    <View style={styles.container}>
      <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />
      <BarItem currentIndex={state.index} selfIndex={0} navigation={navigation} />
      <BarItem currentIndex={state.index} selfIndex={1} navigation={navigation} />
      <PublishTool />
      <BarItem currentIndex={state.index} selfIndex={2} navigation={navigation} />
      <BarItem currentIndex={state.index} selfIndex={3} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    paddingBottom: 40,
    paddingTop: 10,
  },
  blur: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default BottomTabBar;
