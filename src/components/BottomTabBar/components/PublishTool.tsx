import { BlurView } from '@react-native-community/blur';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';

function PublishTool() {
  return (
    <View style={styles.container}>
      <View style={styles.tool}>
        <View style={styles.blurContainer}>
          <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />
        </View>
        <FastImage source={require('../static/publish.png')} style={styles.submitBtn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  tool: {
    position: 'absolute',
    top: -25,
    width: 70,
    aspectRatio: 1,
    borderRadius: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  blurContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 17,
    overflow: 'hidden',
  },
  blur: {
    flex: 1,
  },
  submitBtn: {
    width: 50,
    aspectRatio: 1,
  },
});

export default memo(PublishTool);
