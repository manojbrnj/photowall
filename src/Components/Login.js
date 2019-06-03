import React, { Component } from "react";

class Login extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        if(email && password){

            this.props.LoginWithFirebase(email, password)
            if(this.props.user.email) this.props.history.push('/')
        }
    }

    render(){
        return(
            
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Email" name="email"></input>
                        <input type="password" placeholder="Password" name="password"></input>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login