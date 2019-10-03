function tryGetAuth() {
  return window.localStorage.getItem('username');
}

// user {string}
function setAuth(user) {
  window.localStorage.setItem('username', user);
}

export {tryGetAuth, setAuth};
export default setAuth;