import * as React from 'react';
import {Route} from 'react-router-dom';

import {Content} from 'yui-md/lib/Content';
import {Snackbar} from 'yui-md/lib/Snackbar';

import {Header} from './Header';
import {Pages} from './Pages';
import {Footer} from './Footer';

import {createId, cleanId} from 'shared/objects/id';
import {Session} from 'shared/objects/session';
import {globals} from 'static/globals';

class App extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  componentWillMount() {
    // Load cookies into global state
    let serTrackingId = window.localStorage.getItem('trackingId');
    globals.trackingId = serTrackingId ? JSON.parse(serTrackingId) : createId();

    // Create a new session and set the referrer to the current URL.
    globals.session = new Session(globals.trackingId);
    globals.session.createRef(window.location);
    window.onbeforeunload = this.componentWillUnmount;
  }

  componentWillUnmount() {
    window.localStorage.setItem('trackingId', JSON.stringify(cleanId(globals.trackingId)));
    backend.tracking.create(globals.session, globals.trackingId);
    return null;
  }

  render() {
    return (
      <Route path={'/'}>
        <div className={'app-root'}>
          <Header/>
          <Content footerComponent={<Footer/>}>
            <Pages/>
          </Content>
          <Snackbar style={{backgroundColor: '#546e7a'}}/>
        </div>
      </Route>
    );
  }
}

export default App;
export {App};
