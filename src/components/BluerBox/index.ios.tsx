import { BlurView } from '@react-native-community/blur';

function BlurBox() {
  console.log('9898iosblur');
  return <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />;
}

export default BlurBox;
