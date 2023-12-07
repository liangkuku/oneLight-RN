import { memo, useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

type BarItemProps = {
  currentIndex: number;
  selfIndex: number;
  navigation: any;
  route: any;
};

const AnimatedFastImage = Animated.createAnimatedComponent<FastImageProps>(FastImage as any);

function BarItem({ currentIndex, selfIndex, navigation, route }: BarItemProps) {
  const isFocus = currentIndex === selfIndex;
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  // 当isFocus改变时触发动画
  useEffect(() => {
    scale.value = withSequence(
      withTiming(0.8, { duration: 100 }),
      withTiming(1.2, { duration: 100 }),
      withTiming(1, { duration: 100 }),
    );
  }, [isFocus]);

  const selectTab = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocus && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={selectTab}>
      <View style={styles.container}>
        {isFocus ? (
          <AnimatedFastImage
            source={getImgSource(selfIndex, isFocus)}
            style={[styles.img, animatedStyle]}
          />
        ) : (
          <FastImage source={getImgSource(selfIndex, isFocus)} style={styles.img} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 30,
    aspectRatio: 1,
  },
});

const getImgSource = (selfIndex: number, isFocus: boolean) => {
  let source;
  switch (selfIndex) {
    case 0:
      source = isFocus ? require('../static/homeSelect.png') : require('../static/home.png');
      break;
    case 1:
      source = isFocus ? require('../static/marketSelect.png') : require('../static/market.png');
      break;
    case 2:
      source = isFocus ? require('../static/circleSelect.png') : require('../static/circle.png');
      break;
    case 3:
      source = isFocus ? require('../static/mineSelect.png') : require('../static/mine.png');
      break;
    default:
      source = isFocus ? require('../static/homeSelect.png') : require('../static/home.png');
      break;
  }
  return source;
};

export default memo(BarItem, (prevProps, nextProps) => {
  return (
    prevProps.currentIndex !== nextProps.selfIndex && nextProps.currentIndex !== nextProps.selfIndex
  );
});
