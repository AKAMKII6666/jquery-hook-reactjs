import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useJquery, { jQueryObject, isRunningInServer } from '../.';

const App = () => {
  debugger;
  window['$'] = useJquery();
  console.log(window['$']);
  console.log(isRunningInServer);

  return <div>test jquery hook</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
