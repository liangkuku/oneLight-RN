import { makeAutoObservable } from 'mobx';

class TestStore {
  isShowMainRouter = false;

  constructor() {
    makeAutoObservable(this);
    console.log('9898执行store了111');
  }

  async show(message: string, duration: number = 2000) {
    console.log('9898执行store了');
  }
}

export default new TestStore();
