export function listener(btn) {
  class UserMessage {
    constructor() {
      this._btnName = [];
    }
    get btnName() {
      return this._btnName;
    }
    set btnName(value) {
      this._btnName.push(value);
    }
  }
  
  let userMess = new UserMessage()
  userMess.btnName = btn
  alert('Вы нажали на ' + userMess.btnName)
};