import {StyleSheet, View} from 'react-native';
import OlText from '@/components/OneLightText';
import {commonStyles} from '@/common/styles';
import {ToastStore} from '@/store';
import {observer} from 'mobx-react-lite';

const Toast = observer(() => {
  return (
    <View style={styles.container}>
      <OlText style={styles.text}>{ToastStore.message}</OlText>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    maxWidth: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignSelf: 'center',
    top: '42%',
  },
  text: {
    color: commonStyles.white,
    textAlign: 'center',
    lineHeight: 20,
  },
});
export default Toast;
