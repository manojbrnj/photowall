import React,{Component} from 'react';
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

class Main extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="Main">
        <Title title="Photowall" />
        <Route exact path="/" render={() => (
          <div>
            <Photowall {...this.props} />
          </div>
        )} />

        <Route path="/AddPhoto" render={({history}) => (
          <div>
            <AddPhoto {...this.props} />
          </div>
        )} />
      </div>
    );
  }
}

export default Main;
