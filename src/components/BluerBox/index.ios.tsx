import { BlurView } from '@react-native-community/blur';

function BlurBox() {
  return <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />;
}

export default BlurBox;
