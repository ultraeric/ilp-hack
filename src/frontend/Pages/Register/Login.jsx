import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import {IconButton, Button} from 'yui-md/lib/Button';
import {Input} from 'yui-md/lib/Input';

import {setAuth, tryGetAuth} from 'frontend/utils';

import Icon from '@mdi/react';
import {mdiEmail, mdiLinkedin, mdiTwitter, mdiReceivedium, mdiTelegram} from "@mdi/js/mdi";
import {globals} from 'static/globals';

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
    this.state = {};
  }

  setField(fieldName, val) {
    let m = {};
    m[fieldName] = val;
    this.setState(m);
  }

  attemptLogin() {
    let id = this.state.id;
    setAuth(id);
    console.log(tryGetAuth());
    setTimeout(() => this.props.history.push('/me'), 250);
  }

  render() {
    return (
      <div className={'register-page'}>
        <div className={'title-area'}>
          <div className={'centered subtitle'}>
            <Input label={'ID'} value={this.state.id} changeValue={(str) => this.setField('id', str)}/>
            <Button
              {...buttonProps}
              light
              id={'demoreq-button'}
              style={{backgroundColor: 'rgba(256,256,256,0.25)'}}
              onClick={this.attemptLogin}>
              Register
            </Button>
          </div>
        </div>
        <div className={'info-area'}>
        </div>
      </div>
    );

  }
}

Register = withRouter(Guac(Register));

export default Register;
export {Register};
