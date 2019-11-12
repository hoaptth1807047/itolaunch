import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../../component-css/signup.css';
import {SignInLink}  from '../SignIn/index';

import {withFirebase} from '../../Firebase';
import * as ROUTES from '../../../constants/routes';

const SignUpPage = () => (
    <div>
        <SignUpForm/>
    </div>
);

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    phone: '',
    sponsor: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';
const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {firstname, lastname, phone, sponsor, email, passwordOne} = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set(
                    {
                        firstname, lastname,
                        phone, sponsor,
                        email, passwordOne,
                    },
                    {merge: true},
                );
            })
            .then(() => {
                return this.props.firebase.doSendEmailVerification();
            })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }

                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    onChangeCheckbox = event => {
        this.setState({[event.target.name]: event.target.checked});
    };

    render() {
        const {
            firstname,
            lastname,
            phone,
            sponsor,
            email,
            isAdmin,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            firstname === ''||
            lastname === ''||
            phone === ''||
            sponsor === '';


        return (
            <div className="login_page login-bg">
                <div className="container">
                    <div className="row">
                        <div className=" mt-90 col-lg-8 col-lg-offset-2">
                            <div className="row">
                                <div className="login-wrapper crypto">
                                    <div className="col-lg-6 col-sm-12 over-h hidden-sm no-padding-left  no-padding-right">
                                        {/*<img src="../../../../images/crypto-dash/login-img.png" style={{width: '105%'}} alt="" />*/}
                                        <img src={require('../../../images/crypto-dash/login-img.png')} alt=""/>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div id="login" className="login loginpage mt-0 no-pl no-pr pt30 pb30">
                                            <div className="login-form-header flex align-items-center">
                                                {/*<img src="../../../../images/crypto-dash/signup.png" alt="login-icon" style={{maxWidth: '64px'}} />*/}
                                                <img src={require('../../../images/crypto-dash/signup.png')} style={{maxWidth: '64px'}} />
                                                <div className="login-header">
                                                    <h4 className="bold">Signup Now!</h4>
                                                    <h4><small>Enter your data to register.</small></h4>
                                                </div>
                                            </div>
                                            <div className="box login">
                                                <div className="content-body" style={{paddingTop: '25px'}}>
                                                    <form className="no-mb no-mt" onSubmit={this.onSubmit} id="msg_validate" action="#" noValidate="novalidate">
                                                        <div className="row">
                                                            <div className="col-xs-12">
                                                                <div className="col-lg-12">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">First Name</label>
                                                                            <div className="controls">
                                                                                <input className="form-control" name="firstname" value={firstname} onChange={this.onChange} type="text" placeholder="Enter First Name" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Last Name</label>
                                                                            <div className="controls">
                                                                                <input className="form-control" name="lastname" value={lastname} onChange={this.onChange} type="text" placeholder="Enter Last Name" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Phone</label>
                                                                            <div className="controls">
                                                                                <input className="form-control" name="phone" value={phone} onChange={this.onChange} type="text" placeholder="Enter Phone" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Sponsor</label>
                                                                            <div className="controls">
                                                                                <input className="form-control" name="sponsor" value={sponsor} onChange={this.onChange} type="text" placeholder="Enter Sponsor" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="container-fluid form-group">
                                                                    <label className="form-label">Email</label>
                                                                    <div className="controls">
                                                                        <input className="form-control" name="email" value={email} onChange={this.onChange} type="email" placeholder="Email Address" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Password</label>
                                                                            <div className="controls">
                                                                                <input className="form-control" name="passwordOne" value={passwordOne} onChange={this.onChange} type="password" placeholder="Password" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Repeat Password</label>
                                                                            <div className="controls">
                                                                                <input className="form-control" name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Repeat Password" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="text-center">
                                                                    <button disabled={isInvalid} className="btn btn-primary mt-10 btn-corner right-15" type="submit">Sign Up</button>
                                                                    <button className="btn btn-primary mt-10 btn-corner right-15"><SignInLink/></button>
                                                                </div>
                                                                {error && <p>{error.message}</p>}
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


            // <form className="signup-box" onSubmit={this.onSubmit}>
            //     <h1>Sign Up</h1>
            //     <div className="signup-textbox">
            //         <input name="firstname" value={firstname} onChange={this.onChange} type="text"
            //                placeholder="Enter First Name" style={{color: 'white'}}/>
            //     </div>
            //
            //     <div className="signup-textbox">
            //         <input name="lastname" value={lastname} onChange={this.onChange} type="text"
            //                placeholder="Enter Last Name" style={{color: 'white'}}/>
            //     </div>
            //
            //     <div className="signup-textbox">
            //         <input name="phone" value={phone} onChange={this.onChange} type="text"
            //                placeholder="Enter Phone" style={{color: 'white'}}/>
            //     </div>
            //
            //     <div className="signup-textbox">
            //         <input name="sponsor" value={sponsor} onChange={this.onChange} type="text"
            //                placeholder="Enter Sponsor" style={{color: 'white'}}/>
            //     </div>
            //
            //     <div className="signup-textbox">
            //         <input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address"
            //                style={{color: 'white'}}/>
            //     </div>
            //
            //     <div className="signup-textbox">
            //         <input name="passwordOne" value={passwordOne} onChange={this.onChange} type="password"
            //                placeholder="Password"/>
            //     </div>
            //
            //     <div className="signup-textbox">
            //         <input name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password"
            //                placeholder="Confirm Password"/>
            //     </div>
            //
            //     <label>
            //         Admin:
            //         <input
            //             name="isAdmin"
            //             type="checkbox"
            //             checked={isAdmin}
            //             onChange={this.onChangeCheckbox}
            //         />
            //     </label>
            //
            //     <button disabled={isInvalid} className="btn" type="submit">Sign Up</button>
            //     {/*<div className="btn"><SignInLink/></div>*/}
            //     {error && <p>{error.message}</p>}
            // </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export {SignUpForm, SignUpLink};
