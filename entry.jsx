import React from 'react';
import { render } from 'react-dom';
import './style.css';

class HelloReact extends React.Component {
  render() {
    return (
      <div id="helloReact">
        Hello from React!
      </div>
    );
  }
}

render(<HelloReact />, document.getElementById('root-app'));
