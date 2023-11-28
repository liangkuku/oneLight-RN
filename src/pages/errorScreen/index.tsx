import {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import OlText from '@/components/OneLightText';
import {RootSiblingParent} from 'react-native-root-siblings';

function ErrorScreen() {
  useEffect(() => {
    console.log('9898有用--错误组件刷新了');
  }, []);
  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <OlText>出错啦！</OlText>
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ErrorScreen;
