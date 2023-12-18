// import { BlurView } from '@react-native-community/blur';

// function BlurBox() {
//   console.log('9898webblur');
//   return <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />;
// }

// export default BlurBox;

import { BlurView } from '@react-native-community/blur';
import { useEffect, useState } from 'react';

function BlurBox() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return isShow && <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />;
}

export default BlurBox;
