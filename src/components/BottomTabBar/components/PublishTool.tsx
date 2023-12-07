import OlText from '@/components/OneLightText';
import { StyleSheet, View } from 'react-native';

function PublishTool() {
  return (
    <View style={styles.container}>
      <View style={styles.tool}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    borderWidth: 3,
    borderColor: 'green',
    position: 'relative',
  },
  tool: {
    position: 'absolute',
    top: -20,
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});

export default PublishTool;
