import React,{Component} from 'react';
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import Single from './Single'

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

        <Route path="/AddPhoto" render={() => (
          <div>
            <AddPhoto {...this.props} />
          </div>
        )} />

        <Route path="/Single/:id" render={(params) => (
          <div>
            <Single {...this.props} {...params} />
          </div>
        )} />
      </div>
    );
  }
}

export default Main;
