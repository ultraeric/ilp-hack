import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import QRCode from 'qrcode.react';

import {Input} from 'yui-md/lib/Input';

import {IconButton, Button} from 'yui-md/lib/Button';

import Url from 'url-parse';
import queryString from 'query-string';
import {tryGetAuth, getHomeUrl} from "frontend/utils";

const artificialDelay = 100;
const buttonProps = {
  rounded: false,
  hoverShade: true,
  artificialDelay: artificialDelay
};

/**
 * exp: experiment
 */
class Pay extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
    this.state = {};
  }

  tryPay() {
    let url = Url(window.location.href);
    const parsed = queryString.parse(url.query);
    let data;
  };

  render() {
    if (!tryGetAuth()) {
      this.props.history.push('/login');
      return <div/>;
    }

    let url = Url(window.location.href);
    const parsed = queryString.parse(url.query);

    return (
      <div className={'pay-page'}>
        <div className={'info-area'}>
          ID: {parsed.id} <br/>
          Amount: {parsed.amt} <br/>
          Ledger Code: {parsed.ledgerCode} <br/>
          <Button
            {...buttonProps}
            light
            id={'demoreq-button'}
            style={{backgroundColor: 'rgba(256,256,256,0.25)'}}
            onClick={() => {
              this.tryPay();
              this.props.history.push("/me");
            }}>
            Pay
          </Button>
        </div>
      </div>
    );
  }
}

Pay = withRouter(Guac(Pay));

export default Pay;
export {Pay};
