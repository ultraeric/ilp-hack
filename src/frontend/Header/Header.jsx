import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';

import {AppBar} from 'yui-md/lib/AppBar';
import {_NavCreator} from './_NavCreator';


class Header extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <AppBar height={68}
              style={{paddingTop: '0px', boxSizing: 'border-box', paddingBottom: '12px'}}
              className={'z-depth-1'}
              backgroundColor={'white'}>
        <a href={'/'}>
          <img id={'ilp-logo'}
               style={{display: 'inline-block', height: '40px', marginBottom: '-8px'}}
               src={'https://stronghold.co/img/interledger-logo.png'}/>
        </a>
        <_NavCreator/>
      </AppBar>
    );
  }
}

Header = Guac(Header);

export default Header;
export {Header};
