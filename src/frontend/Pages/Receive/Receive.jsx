import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import QRCode from 'qrcode.react';

import {Input} from 'yui-md/lib/Input';

import {IconButton, Button} from 'yui-md/lib/Button';

import Icon from '@mdi/react';
import {mdiEmail, mdiLinkedin, mdiTwitter, mdiReceivedium, mdiTelegram} from "@mdi/js/mdi";
import {globals} from 'static/globals';
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
class Receive extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
    this.state = {};
  }

  setField(fieldName, val) {
    let m = {};
    m[fieldName] = val;
    this.setState(m);
  }

  setQrVal(amt, ledgerCode) {
    let val = "http://" + window.location.hostname.toString() + ":" + window.location.port.toString()
      + "/pay/?id=" + tryGetAuth() + "&"
      + "amt=" + amt + "&"
      + "ledgerCode=" + ledgerCode;
    this.setState({qrval: val});
  }

  render() {
    return (
      <div className={'receive-page'}>
        <div className={'info-area'}>
          ID: {tryGetAuth()}
          <Input label={'Amount'} value={this.state.amt} changeValue={(str) => this.setField('amt', str)}/>
          <Input label={'LedgerID'} value={this.state.ledger} changeValue={(str) => this.setField('ledger', str)}/>
          <Button
            {...buttonProps}
            light
            id={'demoreq-button'}
            style={{backgroundColor: 'rgba(256,256,256,0.25)'}}
            onClick={() => this.setQrVal(this.state.amt, this.state.ledger)}>
            Generate QR
          </Button>
          { this.state.qrval ? <div id={'qrcenter'}><QRCode value={this.state.qrval} renderAs={'svg'}/></div> : null}
        </div>
      </div>
    );
  }
}

Receive = withRouter(Guac(Receive));

export default Receive;
export {Receive};
