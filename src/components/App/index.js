import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../Navigation';
import SignUpPage from '../auth/SignUp';
import SignInPage from '../auth/SignIn';
import SmartContractPage from '../../components/data-table/smart-contract/smart-contract';
import TransactionPage from '../../components/data-table/transaction/transaction';
import UserPage from '../../components/data-table/user/user';
import ProjectPage from '../../components/data-table/project/project';
import ValidationFormPage from '../view/Form/Form Validation/validation-fom';
import PreMadeFormPage from '../view/Form/Form Pre Made/pre-made-form';
import WizardFormPage from '../view/Form/Form Wizard/wizard-form';
import PasswordForgetPage from '../auth/PasswordForget';
import HomePage from '../view/Home';

import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../auth/Session';

const App = () => (
    <Router>
        <div>
            <Navigation/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route path={ROUTES.SMARTCONTRACT} component={SmartContractPage}/>
            <Route path={ROUTES.TRANSACTION} component={TransactionPage}/>
            <Route path={ROUTES.USER} component={UserPage}/>
            <Route path={ROUTES.PROJECT} component={ProjectPage}/>
            <Route path={ROUTES.VALIDATION} component={ValidationFormPage}/>
            <Route path={ROUTES.PREMADE} component={PreMadeFormPage}/>
            <Route path={ROUTES.WIZARD} component={WizardFormPage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route exact path={ROUTES.HOME} component={HomePage}/>
        </div>
    </Router>
);

export default withAuthentication(App);
