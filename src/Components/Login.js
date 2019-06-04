import React, { Component } from "react";

class Login extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginWithGoogle = this.loginWithGoogle.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        if(email && password){

            this.props.LoginWithFirebase(email, password).then(() => {
                if(this.props.user.email) this.props.history.push('/')
            })
            
        }
    }

    loginWithGoogle(event){
        event.preventDefault();
        this.props.LoginWithGoogle().then(() => {
            if(this.props.user.email) this.props.history.push('/')
        })
    }

    render(){
        return(
            
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Email" name="email"></input>
                        <input type="password" placeholder="Password" name="password"></input>
                        <button>Log in with User and Password</button>
                    </form>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <p>Or</p>
                    </div>
                </div>
                <div className="form">
                        <button className="sign-with-google-button" onClick={this.loginWithGoogle}>
                        <img width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
                         Sign in with Google
                        </button>
                        
                </div>
            </div>
        )
    }
}

export default Login