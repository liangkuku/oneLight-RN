import { commonStyles } from '@/common/styles';
import AddNewsScreen from '@/pages/addNewsScreen';
import { BlurView } from '@react-native-community/blur';
import { memo, useState } from 'react';
import { Modal, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';

function PublishTool() {
  const isIos = Platform.OS === 'ios';
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  return (
    <>
      <Modal animationType='fade' hardwareAccelerated visible={modalVisible} transparent statusBarTranslucent>
        <AddNewsScreen></AddNewsScreen>
      </Modal>
      <TouchableWithoutFeedback onPress={openModal}>
        <View style={styles.container}>
          <View style={styles.tool}>
            <View style={styles.blurContainer}>
              {isIos ? (
                <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />
              ) : (
                <View style={styles.spaceBoxForOthers} />
              )}
            </View>
            <FastImage source={require('../static/publish.png')} style={styles.submitBtn} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
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
    height: 15,
    overflow: 'hidden',
  },
  blur: {
    flex: 1,
  },
  spaceBoxForOthers: {
    flex: 1,
    backgroundColor: commonStyles.white,
  },
  submitBtn: {
    width: 55,
    aspectRatio: 1,
  },
});

export default memo(PublishTool);
