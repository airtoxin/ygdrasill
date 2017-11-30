import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>
      </div>
    );
  }
}

let render = () => {
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('App'));
}

render();

declare global {
  interface Window {
    module: any;
  }
}
if (window.module.hot) {
  window.module.hot.accept(render);
}
