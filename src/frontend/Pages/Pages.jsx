import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';
import {Route, Switch} from 'react-router-dom';

import {Home} from './Home';
import {Me} from './Me';
import {Login} from './Login';
import {Receive} from './Receive';

class Pages extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
    }

  render() {
    return (
      <div className={'page'}>
        <Route path='*' render={() => {window.scrollTo(0, 0); return null;}}/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/me' component={Me}/>
          <Route path='/login' component={Login}/>
          <Route path='/receive' component={Receive}/>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

Pages = Guac(Pages);

export default Pages;
export {Pages};
