import { StyleSheet, View } from 'react-native';
import OlText from '../OneLightText';
import { BlurView } from '@react-native-community/blur';

function BottomTabBar() {
  return (
    <View style={styles.container}>
      <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />
      <OlText>111</OlText>
      <OlText>222</OlText>
      <OlText>333</OlText>
      <OlText>444</OlText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    paddingBottom: 30,
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
