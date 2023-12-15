import { StyleSheet } from 'react-native';
import OlText from '@/components/OneLightText';
import RootView from '@/components/RootView';

function CircleScreen() {
  return (
    <RootView style={styles.page}>
      <OlText>圈子</OlText>
    </RootView>
  );
}

const styles = StyleSheet.create({
  page: {},
});

export default CircleScreen;
