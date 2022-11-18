import React from 'react';
import List from './List';
import Main from './Main';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <List />
        <Main />
      </div>
    );
  }
}
export default App;
//render component is dom
