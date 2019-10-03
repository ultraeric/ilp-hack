import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import QRCode from 'qrcode.react';

import {setAuth, tryGetAuth, getHomeUrl} from 'frontend/utils';

import axios from 'axios';


import {IconButton, Button} from 'yui-md/lib/Button';

const artificialDelay = 100;
const buttonProps = {
  rounded: false,
  hoverShade: true,
  artificialDelay: artificialDelay
};

/**
 * exp: experiment
 */
class Me extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
    this.state = {};
    if (tryGetAuth()) {

    }
  }

  render() {
    if (!tryGetAuth()) {
      this.props.history.push('/login');
      return <div/>;
    }
    let items = this.state.accounts ? this.state.accounts.map(
      (account) => {return (
      <div>
        ID: {account.connector_username} <br/>
        Ledger Code: {account.asset_code}
      </div>)
    }) : null;
    let val = "http://" + window.location.hostname.toString() + ":" + window.location.port.toString() + "/addFriend/id=" + tryGetAuth();
    return (
      <div className={'me-page'}>
        <div className={'info-area'}>
          <div id={'qrcenter'}><QRCode value={val} renderAs={'svg'}/></div>
          {items}
          <div>
            ID: connector1 <br/>
            Ledger Code: XRP
          </div>
        </div>
      </div>
    );

  }
}

Me = withRouter(Guac(Me));

export default Me;
export {Me};
