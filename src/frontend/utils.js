function tryGetAuth() {
  return window.localStorage.getItem('username');
}

// user {string}
function setAuth(user) {
  window.localStorage.setItem('username', user);
}


function getHomeUrl() {
  return window.localStorage.getItem('homeurl');
}

function setHomeUrl(url) {
  return window.localStorage.setItem('homeurl', url);
}

export {tryGetAuth, setAuth , getHomeUrl, setHomeUrl};
export default setAuth;