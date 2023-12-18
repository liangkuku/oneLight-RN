import { Platform, StyleSheet, View } from 'react-native';
import BarItem from './components/BarItem';
import PublishTool from './components/PublishTool';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import BlurBox from '@/components/BluerBox/index';

function BottomTabBar(props: BottomTabBarProps) {
  const isIos = Platform.OS === 'ios';
  const { state, navigation } = props;
  return (
    <View style={[styles.container, isIos ? styles.containerForIos : styles.containerForOthers]}>
      <View style={styles.blurContainer}>
        <BlurBox />
      </View>
      <BarItem
        currentIndex={state.index}
        route={state.routes[0]}
        selfIndex={0}
        navigation={navigation}
      />
      <BarItem
        currentIndex={state.index}
        route={state.routes[1]}
        selfIndex={1}
        navigation={navigation}
      />
      <PublishTool navigation={navigation} />
      <BarItem
        currentIndex={state.index}
        route={state.routes[2]}
        selfIndex={2}
        navigation={navigation}
      />
      <BarItem
        currentIndex={state.index}
        route={state.routes[3]}
        selfIndex={3}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
  },
  containerForIos: {
    paddingBottom: 40,
  },
  containerForOthers: {
    paddingBottom: 20,
  },
  blurContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
  },
});

export default BottomTabBar;
