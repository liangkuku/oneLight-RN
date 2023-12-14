type Route = {
  path: string;
  component: React.FC;
  title: string;
  headerShown?: boolean;
  presentation?:
    | 'card'
    | 'modal'
    | 'transparentModal'
    | 'containedModal'
    | 'containedTransparentModal'
    | 'fullScreenModal'
    | 'formSheet'
    | undefined;
};

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
