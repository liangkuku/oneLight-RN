/// <reference types="react-native" />

interface Rout {
  component: {
    name: string;
    options?: any;
  };
}

interface StackRoot {
  root: {
    stack: {
      children: Rout[];
    };
  };
}

// 信息 常见：首页一条发布信息
type NewsItem = {
  id: string;
  publisherName: string;
  avatar: string;
  imgs?: string[];
  description: string;
  publishTime: number | string;
  tags?: number[];
};

type ToastOptions = {
  containerStyle?: StyleProp<ViewStyle>;
  duration?: number;
  visible?: boolean;
  position?: number;
  animation?: boolean;
  shadow?: boolean;
  backgroundColor?: string;
  opacity?: number;
  shadowColor?: string;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  delay?: number;
  keyboardAvoiding?: boolean;
  hideOnPress?: boolean;
  onHide?: Function;
  onHidden?: Function;
  onShow?: Function;
  onShown?: Function;
  onPress?: Function;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: string;
};
type ToastPositions = {
  TOP: number;
  BOTTOM: number;
  CENTER: number;
};
interface ToastTool {
  show: (message: string, options?: ToastOptions | undefined) => any;
  positions: ToastPositions;
}
declare var Toast: ToastTool;

declare var WINDOW_WIDTH: number;
declare var WINDOW_HEIGHT: number;

interface ResponseType {
  success: boolean;
  code: number;
  data: any;
  message: string;
  path?: string;
}
