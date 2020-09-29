import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail:'',
            signInPassword: '',
            httpResponse: '',
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
                })
            })
            // .then(this.props.onRouteChange('home'))
            .then(response => {
                this.setState({httpResponse: response.json()})
            })
            // .then(response => response.json())
            // .then(data => {
            //     // console.log(data);
            //     if (data === 'success'){
            //         return this.props.onRouteChange('home');
                    
            //     }
            // })
            
    }
    render() {
        console.log(this.state);
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}
                        />
                    </div>
                    </fieldset>
                    <div className="">
                    <input
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit" 
                        value="Sign in"
                        onClick={this.onSubmitSignIn}
                        />
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                </form>
                </main>
            </article>
            );
        }
    
}

export default Signin;