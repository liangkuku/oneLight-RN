import {StyleSheet, View} from 'react-native';
import OlText from '@/components/OneLightText';
import {RootSiblingParent} from 'react-native-root-siblings';

function CircleScreen() {
  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <OlText>圈子</OlText>
      </View>
    </RootSiblingParent>
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
