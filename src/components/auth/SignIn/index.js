import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import '../../../component-css/signin.css';
// import {SignUpLink} from '../SignUp';
// import {PasswordForgetLink} from '../PasswordForget';
import {withFirebase} from '../../Firebase';
import * as ROUTES from "../../../constants/routes";
import PasswordForgetPage, {PasswordForgetLink} from "../PasswordForget";
import {SignUpLink} from "../SignUp";

const SignInPage = () => (
    <div>
        <SignInForm/>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
    'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(ref => {
                this.setState({...INITIAL_STATE});
                //
                // this.props.history.push(ROUTES.HOME);
                ref.user.getIdToken(true).then(a => {
                    console.log("tổ kén: " + a);
                    // tslint:disable-next-line:only-arrow-functions
                }).catch(function (error) {
                    // Handle error
                    console.log('get token error: ', error);
                });
                console.log('token user: ', ref.user.refreshToken);
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div className="login_page login-bg body">
                <div className="container">
                    <div className="row">
                        <div className=" mt-90 col-lg-8 col-lg-offset-2">
                            <div className="row">
                                <div className="login-wrapper crypto">
                                    <div className="col-lg-5 col-sm-12 hidden-sm no-padding-left  no-padding-right">
                                        <img src={require('../../../images/crypto-dash/login-img.png')} alt=""/>
                                    </div>
                                    <div className="col-lg-7 col-sm-12">
                                        <div id="login" className="login loginpage mt-0 no-pl no-pr pt30 pb30">
                                            <div className="login-form-header  flex align-items-center">
                                                <img
                                                    src={require('../../../images/padlock.png')}
                                                    alt="login-icon"
                                                    style={{maxWidth: 64}}
                                                />
                                                <div className="login-header">
                                                    <h4 className="bold">Login Now!</h4>
                                                    <h4>
                                                        <small>Enter your credentials to login.</small>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="box login">
                                                <div className="content-body" style={{paddingTop: 30}}>
                                                    <form
                                                        id="msg_validate"
                                                        action="#"
                                                        noValidate="novalidate"
                                                        className="no-mb no-mt"
                                                    >
                                                        <div className="row">
                                                            <div className="col-xs-12">
                                                                <div className="form-group">
                                                                    <label className="form-label">Email</label>
                                                                    <div className="controls">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="formfield2"
                                                                            placeholder="email"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="form-label">Password</label>
                                                                    <div className="controls">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="formfield1"
                                                                            placeholder="password"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="text-center">
                                                                    {/*<a href="index-crypto-dashboard.html" className="btn btn-primary mt-10 btn-corner right-15">Log in</a>*/}
                                                                    <button disabled={isInvalid} className="btn btn-primary mt-10 btn-corner right-15" type="submit">Sign In</button>
                                                                </div>
                                                                <p id="nav" className="over-h">
                                                                    {/*<a className="pull-left blue-text" href="#" title="Password Lost and Found">Forgot password?</a>*/}
                                                                    {/*<a className="btn btn-primary mt-10 btn-corner right-15" href="#"><PasswordForgetLink/></a>*/}
                                                                    <a className="pull-left blue-text" href="#"><PasswordForgetLink/></a>

                                                                    {/*<a className="pull-right blue-text" href="crypto-register.html" title="Sign Up">Sign Up</a>*/}
                                                                    {/*<a className="btn btn-primary mt-10 btn-corner right-15"><SignInLink/></a>*/}
                                                                    <a className="pull-right blue-text" href="#"><SignUpLink/></a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            // <form className="login-box" onSubmit={this.onSubmit}>
            //     <h1>Login</h1>
            //     <div className="signin-box">
            //         <input type="text" placeholder="Enter Email" name="email" value={email} onChange={this.onChange}
            //                style={{color: 'white'}}/>
            //     </div>
            //
            //     <div className="signin-box">
            //         <input type="password" placeholder="Enter Password" name="password" value={password}
            //                onChange={this.onChange}/>
            //     </div>
            //     <div className="button-content">
            //         <PasswordForgetLink/>
            //     </div>
            //     <button disabled={isInvalid} className="btn" type="submit">Sign In</button>
            //     <div className="btn"><SignUpLink/></div>
            //     {error && <p>{error.message}</p>}
            // </form>
        );
    }
}

const SignInLink = () => (
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
);

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;
export {SignInLink};

