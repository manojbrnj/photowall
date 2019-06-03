import React,{Component} from 'react';
import Title from './Title'
import Photowall from './Photowall'
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import Single from './Single'
import Login from './Login'

class Main extends Component{

  state = {loading: true}

  componentDidMount(){
    this.props.startLoadingPost()
    this.props.startLoadingComments().then(()=>{ this.setState({loading: false})})
    //this.props.startTesting();
  }

  render() {
    return (
      <div className="Main container-fluid">
        <Title title="Photowall" {...this.props} />

        <Route path="/Login" render={() => (
          <div>
            <Login {...this.props} />
          </div>
        )} />

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
            <Single loading={this.state.loading} {...this.props} {...params} />
          </div>
        )} />
      </div>
    );
  }
}

export default Main;
