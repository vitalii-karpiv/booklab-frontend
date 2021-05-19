import EventEmitter from 'events';

class AuthManager {
  tokenKey = 'BOOKLAB_TOKEN';

  emitter = new EventEmitter();

  eventTypes = {
    LOGIN_STATUS_CHANGED: 'LOGIN_STATUS_CHANGED',
  };

  isLoggedIn() {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  login(token) {
    localStorage.setItem(this.tokenKey, token);
    this.emitter.emit(this.eventTypes.LOGIN_STATUS_CHANGED, true);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.emitter.emit(this.eventTypes.LOGIN_STATUS_CHANGED, false);
  }

  onLoginStatusChange(cb) {
    this.emitter.on(this.eventTypes.LOGIN_STATUS_CHANGED, cb);

    return () => this.emitter.off(this.eventTypes.LOGIN_STATUS_CHANGED, cb);
  }
}

export default new AuthManager();
