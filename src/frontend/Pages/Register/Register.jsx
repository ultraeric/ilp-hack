import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import {IconButton, Button} from 'yui-md/lib/Button';
import {Input} from 'yui-md/lib/Input';

import {setAuth, tryGetAuth, setHomeUrl} from 'frontend/utils';

import axios from 'axios';

const artificialDelay = 100;
const buttonProps = {
  rounded: false,
  hoverShade: true,
  artificialDelay: artificialDelay
};

/**
 * exp: experiment
 */
class Register extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
    this.state = {url: 'exampleID'};
  }

  setField(fieldName, val) {
    let m = {};
    m[fieldName] = val;
    this.setState(m);
  }

  attemptRegister() {
    setAuth(this.state.id);
    setHomeUrl(this.state.url);
    var data = JSON.stringify({
      "receiver": "$connector1.localtunnel.me",
      "source_amount": 100
    });
  }

  render() {
    if (tryGetAuth()) {
      this.props.history.push('/me');
    }
    return (
      <div className={'register-page'}>
        <div className={'info-area'}>
          <div className={'centered subtitle'}>
            <Input label={'ID'} value={this.state.id} changeValue={(str) => this.setField('id', str)}/>
            <Input label={'Key'} value={this.state.key} changeValue={(str) => this.setField('key', str)}/>
            <Input label={'Home Connector ID'} value={this.state.url} changeValue={(str) => this.setField('url', str)}/>
            <Button
              {...buttonProps}
              light
              id={'demoreq-button'}
              style={{backgroundColor: 'rgba(256,256,256,0.25)'}}
              onClick={this.attemptRegister}>
              Register
            </Button>
          </div>
        </div>
      </div>
    );

  }
}

Register = withRouter(Guac(Register));

export default Register;
export {Register};
