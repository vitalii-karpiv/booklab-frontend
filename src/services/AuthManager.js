class AuthManager {
  tokenKey = "BOOKLAB_TOKEN";

  subsribers = [];

  isLoggedIn() {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  login(token) {
    localStorage.setItem(this.tokenKey, token);
    this.notifySubsribers(token);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.notifySubsribers(null);
  }

  subscribe(cb) {
    this.subsribers.push(cb);
  }

  unsubsribe(cb) {
    this.subsribers = this.subsribers.filter((subsriber) => cb !== subsriber);
  }

  notifySubsribers(data) {
    this.subsribers.forEach((cb) => cb(data));
  }
}

export default new AuthManager();
