import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import OlText from '@/components/OneLightText';
import RootView from '@/components/RootView';

function ErrorScreen() {
  useEffect(() => {
    console.log('9898有用--错误组件刷新了');
  }, []);
  return (
    <RootView style={styles.container}>
      <OlText>出错啦！</OlText>
    </RootView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorScreen;
