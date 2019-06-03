import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Title extends Component{

    render(){
        
    return <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-light bg-light">
                        <h1><Link to="/">{this.props.title}</Link></h1>
                        {
                            !this.props.user.email ?
                                <Link className="add-photo btn btn-primary" to="/AddPhoto">Add Photo</Link> : ''
                            
                        }
                        {
                        !this.props.user.email? <Link className="" to="/Login"><span className="logInIcon"></span></Link> : <span>{this.props}</span>
                        }
                    </nav>
                </div>
            </div>
    }
}

export default Title;