import {StyleSheet, View} from 'react-native';
import OlText from '@/components/OneLightText';
import { commonStyles } from '@/common/styles';

function CircleScreen() {
  return (
    <View style={styles.page}>
      <OlText>圈子</OlText>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: commonStyles.pageBgColor
  },
});

export default CircleScreen;
