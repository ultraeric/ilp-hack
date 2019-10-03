import * as React from 'react';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import {IconButton, Button} from 'yui-md/lib/Button';
import {HomeSlideshow} from './HomeSlideshow';

import Icon from '@mdi/react';
import {mdiEmail, mdiLinkedin, mdiTwitter, mdiMedium, mdiTelegram} from "@mdi/js/mdi";
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
class Home extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'home-page'}>
        <HomeSlideshow exp={(this.props.exp && this.props.exp.imgUrl) ? this.props.exp : null}/>
        <div className={'title-area'}>
          <div className={'centered subtitle'}>
            <Button
              {...buttonProps}
              light
              id={'demoreq-button'}
              style={{backgroundColor: 'rgba(256,256,256,0.25)'}}
              onClick={() => this.props.history.push('/login') && globals.session.createClick(window.location, '/login', 'demoreq-button')}>
              Login
            </Button>
          </div>
        </div>
        <div className={'info-area'}>
        </div>
      </div>
    );

  }
}

Home = withRouter(Guac(Home));

export default Home;
export {Home};
