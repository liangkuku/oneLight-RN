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

declare var WINDOW_WIDTH: number;
declare var WINDOW_HEIGHT: number;

interface ResponseType {
  success: boolean;
  code: number;
  data: any;
  message: string;
  path?: string;
}

type ToastType = {
  show: (message: string, duration?: number) => void;
};
declare var Toast: ToastType;
