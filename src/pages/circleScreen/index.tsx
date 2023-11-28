import {StyleSheet, View} from 'react-native';
import OlText from '@/components/OneLightText';

function CircleScreen() {
  return (
    <View style={styles.container}>
      <OlText>圈子</OlText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});

export default CircleScreen;
