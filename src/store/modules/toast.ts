import {makeAutoObservable, runInAction} from 'mobx';
import {Navigation} from 'react-native-navigation';

class ToastStore {
  status = false;
  message = '';
  currentToastId = '';
  timer: NodeJS.Timeout | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async show(message: string, duration: number = 2000) {
    if (this.status) {
      clearTimeout(this.timer);
    }
    let toastId: any;
    this.message = message;
    if (!this.status) {
      toastId = await Navigation.showOverlay({
        component: {
          name: 'Toast',
          options: {
            layout: {
              componentBackgroundColor: 'transparent',
            },
            overlay: {
              interceptTouchOutside: false,
            },
          },
        },
      });
      runInAction(() => {
        this.currentToastId = toastId;
        this.status = true;
      });
    }

    const timer = setTimeout(async () => {
      Navigation.dismissOverlay(this.currentToastId);
      runInAction(() => {
        clearTimeout(timer);
        this.currentToastId = '';
        this.message = '';
        this.status = false;
        this.timer = undefined;
      });
    }, duration);
    this.timer = timer;
  }
}

export default new ToastStore();
