import OlText from '@/components/OneLightText';
import {memo} from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Assets} from 'react-native-ui-lib';

function Slogan() {
  return (
    <>
      <FastImage
        style={[styles.viewMargin, styles.logo]}
        source={Assets.icons.logo}
      />
      <OlText style={[styles.title, styles.viewMargin]}>
        嗨<OlText style={styles.appName}>, oneLight</OlText>
      </OlText>
    </>
  );
}

const styles = StyleSheet.create({
  viewMargin: {
    marginBottom: 30,
  },
  logo: {
    width: 65,
    height: 65,
  },
  title: {
    fontSize: 38,
    fontWeight: '500',
    textAlign: 'center',
  },
  appName: {
    fontSize: 25,
    fontWeight: '400',
  },
});

export default memo(Slogan);
