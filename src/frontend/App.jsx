import * as React from 'react';
import {Route} from 'react-router-dom';

import {Content} from 'yui-md/lib/Content';
import {Snackbar} from 'yui-md/lib/Snackbar';

import {Header} from './Header';
import {Pages} from './Pages';
import {Footer} from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  componentWillMount() {
    // Load cookies into global state
    window.onbeforeunload = this.componentWillUnmount;
  }

  componentWillUnmount() {
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
