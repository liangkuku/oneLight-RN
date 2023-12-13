import { commonStyles } from '@/common/styles';
import OlText from '@/components/OneLightText';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

type AddTypeItemProps = {
  typeInfo: {
    bgColor: string;
    title: string;
    desc: string;
    descImg: string;
    id: string;
  };
};

function AddTypeItem({ typeInfo }: AddTypeItemProps) {
  const { bgColor = 'pink', title = '标题', desc = '描述内容', descImg = '' } = typeInfo;
  return (
    <Animated.View
      style={[styles.container, { backgroundColor: bgColor }]}
      entering={FadeInRight}
      exiting={FadeOutLeft}>
      <FastImage source={{ uri: descImg }} style={styles.descImg} />
      <View style={styles.mainInfo}>
        <OlText style={styles.title} numberOfLines={1}>
          {title}
        </OlText>
        <OlText style={styles.desc} numberOfLines={1}>
          {desc}
        </OlText>
      </View>
      <Icon
        name='chevron-forward-outline'
        size={20}
        style={styles.rightIcon}
        color={commonStyles.grey_text}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: commonStyles.pageBorderGap,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  descImg: {
    width: 50,
    aspectRatio: 1,
  },
  mainInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: commonStyles.pageBorderGap,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  desc: {
    color: commonStyles.grey_text,
  },
  rightIcon: {
    alignSelf: 'center',
  },
});

export default AddTypeItem;
