class Nav {
  constructor(name, href, subnavs=null) {
    this.name = name;
    this.href = href;
    this.subnavs = subnavs;
  }
}

let mainNavs = [
  new Nav('Home', '/home'),
  new Nav('Me', '/me'),
  new Nav('Login', '/login'),
  new Nav('Receive', '/me/receive'),
  new Nav('Register', '/register')
];

export default mainNavs;
export {mainNavs};
