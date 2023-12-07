import OlText from '@/components/OneLightText';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

function BarItem({ currentIndex, selfIndex, navigation }) {
  const isFocus = currentIndex === selfIndex;
  return (
    <View style={styles.container}>
      {isFocus ? (
        <FastImage source={getImgSource(selfIndex, isFocus)} style={styles.img} />
      ) : (
        <FastImage source={getImgSource(selfIndex, isFocus)} style={styles.img} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  img: {
    width: 32,
    height: 32,
  },
});

const getImgSource = (selfIndex, isFocus) => {
  let source;
  switch (selfIndex) {
    case 0:
      source = isFocus ? require('../static/home.png') : require('../static/home.png');
      break;
    case 1:
      source = isFocus ? require('../static/market.png') : require('../static/market.png');
      break;
    case 2:
      source = isFocus ? require('../static/circle.png') : require('../static/circle.png');
      break;
    case 3:
      source = isFocus ? require('../static/mine.png') : require('../static/mine.png');
      break;
    default:
      source = isFocus ? require('../static/home.png') : require('../static/home.png');
      break;
  }
  return source;
};

export default BarItem;
