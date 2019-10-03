import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import {IconButton, Button} from 'yui-md/lib/Button';

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
class Receive extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'receive-page'}>
        <div className={'title-area'}>
          <div className={'centered subtitle'}>
          </div>
        </div>
        <div className={'info-area'}>
        </div>
      </div>
    );

  }
}

Receive = withRouter(Guac(Receive));

export default Receive;
export {Receive};
