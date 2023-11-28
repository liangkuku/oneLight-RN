import {commonStyles} from '@/common/styles';
import BlurBox from '@/components/BlurBox';
import {getNavigationConsts} from '@/utils/loadAppTools';
import {Platform, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NewsTypeController from './components/NewsTypeController';
import {RootSiblingParent} from 'react-native-root-siblings';

function AddNewsScreen() {
  const {statusBarHeight, bottomTabsHeight} = getNavigationConsts();
  return (
    <RootSiblingParent>
      <View
        style={[
          styles.page,
          {
            paddingTop: statusBarHeight,
            paddingBottom: bottomTabsHeight,
            paddingHorizontal: commonStyles.pageBorderGap,
          },
        ]}>
        <LinearGradient
          style={styles.bg}
          colors={[
            'rgba(246, 248, 249, 0.2)',
            'rgba(192, 255, 248, 0.5)',
            'rgba(246, 248, 249, 0.2)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 0.8, y: 0.8}}
          locations={[0.3, 0.6, 1]}
        />
        <NewsTypeController />
        <BlurBox />
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  page: {
    ...Platform.select({
      ios: {
        height: WINDOW_HEIGHT,
      },
      android: {
        flex: 1,
      },
    }),
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default AddNewsScreen;
