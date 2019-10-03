import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';

import {Tab} from 'yui-md/lib/Tab';
import {TabList} from 'yui-md/lib/TabList';
import {Menu} from 'yui-md/lib/Menu';
import {MenuItem} from 'yui-md/lib/MenuItem';
import {IconButton} from 'yui-md/lib/Button';
import {provideWindowSize} from 'yui-md/lib/utils';
import mainNavs from 'static/structure/mainNavs.js';
import {withRouter, matchPath} from 'react-router';

import {globals} from 'static/globals';

/*
  Props:
  - navs <array>: navs specified by mainNavs.js
*/
class _NavCreator extends React.Component {
  constructor(props) {
    super(props);
    this.bindAllMethods();
    let isMenuActive = {Main: false};
    for (var i in props.navs) {
      isMenuActive[props.navs[i].name] = false;
    }
    this.state = {
      isMenuActive: isMenuActive,
      activeTabKey: 0,
      buttonMenuActive: false
    };
  }

  calcActiveKey() {
    for (var i in this.props.navs) {
      if (matchPath(this.props.location.pathname, {path: this.props.navs[i].href})) {
        return i;
      }
    }
  }

  setMenuActive(menuName, active) {
    let currentlyActive = typeof(active) === 'undefined' ? !this.state.isMenuActive[menuName] : active;
    this.state.isMenuActive[menuName] = currentlyActive;
    this.setState({isMenuActive: this.state.isMenuActive});
  }

  setButtonMenuActive(active) {
    this.setState({buttonMenuActive: active});
  }

  pushHistory(href) {
    this.props.history.push(href);
  }

  /*
    Only allows 2-deep navs
  */
  calcNavComponents(props) {
    let navs = mainNavs;
    let navComponents = [];

    //Generate the tabs for the navs
    for (var i in navs) {
      let nav = navs[i];
      let menu = null;
      if (nav.subnavs) {
        menu = this.calcSubNavMenu(nav);
      }
      navComponents.push(<Tab
        key={i}
        tabKey={i}
        onMouseEnter={() => {this.setMenuActive(nav.name, true)}}
        onMouseLeave={() => this.setMenuActive(nav.name, false)}
        onClick={(event) => {this.pushHistory(nav.href) && globals.session.createClick(window.location, nav.href, 'navbar-button')}}>
        {nav.name}
        {menu}
      </Tab>);
    }
    return navComponents;
  }

  calcSmallNavComponents(props) {
    let navs = props.navs;
    let navComponents = [
    ];

    for (var i in navs) {
      let nav = navs[i];
      navComponents.push(
        <MenuItem key={i}
                  onMouseEnter={() => this.setMenuActive(nav.name, true)}
                  onMouseLeave={() => this.setMenuActive(nav.name, false)}
                  onClick={(event) => {this.pushHistory(nav.href); this.setButtonMenuActive(false);}}>
          {nav.name}
        </MenuItem>
      )
    }

    return navComponents;
  }

  render() {
    if (window.isServer) {
      return null;
    } else if (this.props.windowSize.width > 700) {
      return (
        <TabList style={{margin: '10px',
          marginBottom: '-10px',
          boxSizing: 'border-box',
          maxWidth: 'calc(250px + 30vw)',
          float:'right'}}
                 activeTabKey={this.calcActiveKey()}
                 setActiveTabKey={(key) => {this.setState({activeTabKey: key})}}>
          {this.calcNavComponents(this.props)}
        </TabList>
      );
    }
    else {
      return (
        <IconButton icon={'menu'}
                    onClick={() => this.setButtonMenuActive(!this.state.buttonMenuActive)}
                    style={{float: 'right'}}>
          <Menu
            position={'top right'}
            anchor={'top right'}
            active={this.state.buttonMenuActive}
            setActive={this.setButtonMenuActive}>
            {this.calcSmallNavComponents(this.props)}
          </Menu>
        </IconButton>
      );
    }
  }
}

_NavCreator = provideWindowSize(withRouter(Guac(_NavCreator)));

export default _NavCreator;
export {_NavCreator};