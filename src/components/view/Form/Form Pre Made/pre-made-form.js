import React, {Component} from 'react';
import {compose} from 'recompose';
import {withAuthorization} from '../../../auth/Session';
import * as firebase from "firebase";

class PreMadeForm extends Component {
    constructor(props) {
        super(props);

        // setTimeout(function(){ console.log(firebase.auth().currentUser); }, 3000);

        // firebase.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         console.log('user logined: ', user.email);
        //
        //     } else {
        //         console.log('user not login');
        //     }
        // });
        var clearABC = setInterval(function () {
            if (firebase.auth().currentUser != null) {
                clearInterval(clearABC);
                firebase.auth().currentUser.getIdToken(true)
                    .then(a => {
                        console.log(a);
                        this.tokenKey = a;
                    }).catch(function (error) {
                    // Handle error
                    console.log('get token error: ', error);
                });
            }
        }, 50);
        console.log(firebase.auth().currentUser)

    }

    render() {
        return (
            <div>
                {/* START CONTAINER */}
                <div className="page-container row-fluid container-fluid">
                    {/* SIDEBAR - START */}
                    <div className="page-sidebar fixedscroll">
                        {/* MAIN MENU - START */}
                        <div className="page-sidebar-wrapper" id="main-menu-wrapper">
                            <ul className="wraplist">
                                <li className="menusection">Main</li>
                                <li className>
                                    <a href="index-dashboard.html">
                                        <i className="fa fa-th-large" />
                                        <span className="title">Dashboard</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="index-trading-view.html">
                                        <i className="fa fa-bullseye" />
                                        <span className="title">Trading View</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="index-ico-admin.html">
                                        <i className="fa fa-sitemap" />
                                        <span className="title">ICO Distribution Admin</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="index-ico-user.html">
                                        <i className="fa fa-user" />
                                        <span className="title">ICO Distribution User</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="buy-and-sell.html">
                                        <i className="img">
                                            <img src="../../../../images/icons/coins.png" style={{width: '16px'}} alt="" />
                                        </i>
                                        <span className="title">Buy &amp; Sell Crypto</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="payment-gateways.html">
                                        <i className="fa fa-credit-card" />
                                        <span className="title">Payment Gateways</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="affailite-program.html">
                                        <i className="fa fa-crosshairs" />
                                        <span className="title">Affailiate Program</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="my-wallet.html">
                                        <i className="img"><img src="../../../../images/icons/wallet-o.png" style={{width: '16px'}} alt="" /></i>
                                        <span className="title">My Wallet</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="security.html">
                                        <i className="fa fa-lock" />
                                        <span className="title">Security</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-gear" />
                                        <span className="title">Settings</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="settings.html">General Settings</a>
                                        </li>
                                        <li>
                                            <a className href="account-confirmation.html">Account Confirmation</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-lock" />
                                        <span className="title">Access Pages</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="ui-login.html">Login</a>
                                        </li>
                                        <li>
                                            <a className href="ui-register.html">Registration</a>
                                        </li>
                                        <li>
                                            <a className href="ui-404.html">404</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-question-circle" />
                                        <span className="title">Support</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="ui-faq.html">FAQ</a>
                                        </li>
                                        <li>
                                            <a className href="ui-support.html">Help center</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-columns" />
                                        <span className="title">Layouts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="layout-default.html">Default Layout</a>
                                        </li>
                                        <li>
                                            <a className href="layout-collapsed.html">Collapsed Menu</a>
                                        </li>
                                        <li>
                                            <a className href="layout-chat.html">Chat Open</a>
                                        </li>
                                        <li>
                                            <a className href="layout-boxed.html">Boxed Layout</a>
                                        </li>
                                        <li>
                                            <a className href="layout-boxed-collapsed.html">Boxed Collapsed Menu</a>
                                        </li>
                                        <li>
                                            <a className href="layout-boxed-chat.html">Boxed Chat Open</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menusection">Applications</li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-envelope" />
                                        <span className="title">Mailbox</span>
                                        <span className="arrow " /><span className="label label-accent">4</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="mail-inbox.html">Inbox</a>
                                        </li>
                                        <li>
                                            <a className href="mail-compose.html">Compose</a>
                                        </li>
                                        <li>
                                            <a className href="mail-view.html">View</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-comments" />
                                        <span className="title">Chat API</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="chat-api.html">Chat API</a>
                                        </li>
                                        <li>
                                            <a className href="chat-windows.html">Chat Windows</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menusection">Data Visualization</li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-bar-chart" />
                                        <span className="title">Echarts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="charts-echart-line.html">Line &amp; Area Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-echart-bar.html">Bar &amp; Stacked Charts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-area-chart" />
                                        <span className="title">Morris Charts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="charts-morris-line.html">Line Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-morris-bar.html">Bar &amp; Stacked Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-morris-area.html">Area Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-morris-pie.html">Pie Charts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-line-chart" />
                                        <span className="title">Charts JS</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="charts-chartjs-line.html">Line Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-chartjs-bar.html">Bar Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-chartjs-pie-donut.html">Pie &amp; Donut</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-bar-chart" />
                                        <span className="title">Flot Charts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="charts-flot-area.html">Area Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-flot-line.html">Line Charts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-line-chart" />
                                        <span className="title">Sparkline Charts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="charts-sparkline-line.html">Line &amp; Area Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-sparkline-bar.html">Bar Charts</a>
                                        </li>
                                        <li>
                                            <a className href="charts-sparkline-composite.html">Composite Charts</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menusection">User Interface</li>
                                <li className="open">
                                    <a href="javascript:;"> <i className="fa fa-folder-open" /> <span className="title">Ui Elements</span> <span className="arrow open" /> </a>
                                    <ul className="sub-menu">
                                        <li className>
                                            <a href="javascript:;"><span className="title">Timeline</span> <span className="arrow " /> </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className href="ui-timeline-centered.html">Centered timeline</a>
                                                </li>
                                                <li>
                                                    <a className href="ui-timeline-left.html">Left Aligned timeline</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className>
                                            <a href="javascript:;"><span className="title">Pricing Tables</span> <span className="arrow " /> </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className href="ui-pricing-expanded.html">Expanded</a>
                                                </li>
                                                <li>
                                                    <a className href="ui-pricing-narrow.html">Narrow</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className>
                                            <a href="javascript:;"><span className="title">Icon Sets</span> <span className="arrow " /> </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className href="ui-icons.html">Icon Styles</a>
                                                </li>
                                                <li>
                                                    <a className href="ui-fontawesome.html">Font Awesome</a>
                                                </li>
                                                <li>
                                                    <a className href="ui-glyphicons.html">Glyph Icons</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="open">
                                            <a href="javascript:;"><span className="title">Form Elements</span> <span className="arrow open" /> </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className href="form-elements.html">Field Elements</a>
                                                </li>
                                                <li>
                                                    <a className="active" href="form-elements-premade.html">Pre Made Forms</a>
                                                </li>
                                                <li>
                                                    <a className href="form-elements-icheck.html">Checkbox &amp; Radio</a>
                                                </li>
                                                <li>
                                                    <a className href="form-elements-grid.html">Form Grid</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="form-wizard.html"> <span className="title">Form Wizard</span> </a>
                                        </li>
                                        <li>
                                            <a href="form-validation.html"> <span className="title">Form Validations</span> </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-puzzle-piece" />
                                        <span className="title">Components</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="ui-tabs.html">Tabs</a>
                                        </li>
                                        <li>
                                            <a className href="ui-accordion.html">Accordions</a>
                                        </li>
                                        <li>
                                            <a className href="ui-progress.html">Progress Bars</a>
                                        </li>
                                        <li>
                                            <a className href="ui-buttons.html">Buttons</a>
                                        </li>
                                        <li>
                                            <a className href="ui-modals.html">Modals</a>
                                        </li>
                                        <li>
                                            <a className href="ui-alerts.html">Alerts</a>
                                        </li>
                                        <li>
                                            <a className href="ui-notifications.html">Notifications</a>
                                        </li>
                                        <li>
                                            <a className href="ui-tooltips.html">Tooltips</a>
                                        </li>
                                        <li>
                                            <a className href="ui-popovers.html">Popovers</a>
                                        </li>
                                        <li>
                                            <a className href="ui-navbars.html">Navbars</a>
                                        </li>
                                        <li>
                                            <a className href="ui-dropdowns.html">Dropdowns</a>
                                        </li>
                                        <li>
                                            <a className href="ui-breadcrumbs.html">Breadcrumbs</a>
                                        </li>
                                        <li>
                                            <a className href="ui-pagination.html">Pagination</a>
                                        </li>
                                        <li>
                                            <a className href="ui-labels-badges.html">Labels &amp; Badges</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="fa fa-th-large" />
                                        <span className="title">Appearance</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="ui-typography.html">Typography</a>
                                        </li>
                                        <li>
                                            <a className href="ui-grids.html">Grids</a>
                                        </li>
                                        <li>
                                            <a className href="ui-panels.html">Draggable Panels</a>
                                        </li>
                                        <li>
                                            <a className href="ui-group-list.html">Group Listing</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* MAIN MENU - END */}
                    </div>
                    {/*  SIDEBAR - END */}
                    {/* START CONTENT */}
                    <section id="main-content" className=" ">
                        <div className="wrapper main-wrapper row" style={{}}>
                            <div className="col-xs-12">
                                <div className="page-title">
                                    <div className="pull-left">
                                        {/* PAGE HEADING TAG - START */}
                                        <h1 className="title">Form - Premade Forms</h1>
                                        {/* PAGE HEADING TAG - END */}
                                    </div>
                                    <div className="pull-right hidden-xs">
                                        <ol className="breadcrumb">
                                            <li>
                                                <a href="index-dashboard.html"><i className="fa fa-home" />Home</a>
                                            </li>
                                            <li>
                                                <a href="form-elements.html">Ui Elements</a>
                                            </li>
                                            <li>
                                                <a href="form-elements.html">Form Elements</a>
                                            </li>
                                            <li className="active">
                                                <strong>Pre Made Forms</strong>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                            {/* MAIN CONTENT AREA STARTS */}
                            <div className="col-xs-12">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Vertical Form</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down" />
                                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
                                            <a className="box_close fa fa-times" />
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-md-8 col-sm-9 col-xs-10">
                                                <form>
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="email-1">Email address:</label>
                                                        <input type="email" className="form-control" id="email-1" placeholder="Enter your email…" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="password-1">Password:</label>
                                                        <input type="password" className="form-control" id="password-1" placeholder="Enter your password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            <input type="checkbox" className="iCheck" defaultChecked /> <span>Remember me</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="button" className="btn btn-primary ">Sign in</button>
                                                        <button type="button" className="btn btn-purple  pull-right">Register now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-xs-12">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Modal Forms</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down" />
                                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
                                            <a className="box_close fa fa-times" />
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-md-8 col-sm-9 col-xs-10">
                                                {/* START */}
                                                <div className="position-center ">
                                                    <div className>
                                                        <a href="#myModal" data-toggle="modal" className="btn btn-lg btn-primary">
                                                            MODAL FORM 1
                                                        </a>
                                                        <a href="#myModal-1" data-toggle="modal" className="btn btn-lg btn-primary">
                                                            MODAL FORM 2
                                                        </a>
                                                        <a href="#myModal-2" data-toggle="modal" className="btn btn-lg btn-primary">
                                                            MODAL FORM 3
                                                        </a>
                                                        <br />
                                                    </div>
                                                    <div aria-hidden="true" role="dialog" tabIndex={-1} id="myModal" className="modal fade" style={{display: 'none'}}>
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                                                    <h4 className="modal-title">Register as User</h4>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <label htmlFor="modalname1" className="form-label">Full Name</label>
                                                                            <input type="text" className="form-control" id="modalname1" placeholder="Enter name" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="modalemail1" className="form-label">Email address</label>
                                                                            <input type="email" className="form-control" id="modalemail1" placeholder="Enter email" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="modalpw1" className="form-label">Password</label>
                                                                            <input type="password" className="form-control" id="modalpw1" placeholder="Password" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="modalfile3" className="form-label">File input</label>
                                                                            <input type="file" id="modalfile3" />
                                                                            <span className="help-block">Example block-level help text here.</span>
                                                                        </div>
                                                                        <div className>
                                                                            <label>
                                                                                <input type="checkbox" className="iCheck" /> Check me out
                                                                            </label>
                                                                        </div>
                                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div aria-hidden="true" role="dialog" tabIndex={-1} id="myModal-1" className="modal fade" style={{display: 'none'}}>
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                                                    <h4 className="modal-title">Sign In</h4>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form className="form-horizontal">
                                                                        <div className="input-group">
                                      <span className="input-group-addon">
                                        <span className="arrow" />
                                        <i className="fa fa-envelope" />
                                      </span>
                                                                            <input type="text" className="form-control" placeholder="Your Email" id="inputEmail2" defaultValue />
                                                                        </div>
                                                                        <br />
                                                                        <div className="input-group">
                                      <span className="input-group-addon">
                                        <span className="arrow" />
                                        <i className="fa fa-lock" />
                                      </span>
                                                                            <input type="password" className="form-control" placeholder="Your Password" id="inputpw2" defaultValue />
                                                                        </div>
                                                                        <br />
                                                                        <div className="form-group">
                                                                            <label className="form-label">
                                                                                <input type="checkbox" defaultChecked className="iCheck" /> <span>Remember me</span>
                                                                            </label>
                                                                        </div>
                                                                        <br />
                                                                        <div className="form-group">
                                                                            <div className>
                                                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div aria-hidden="true" role="dialog" tabIndex={-1} id="myModal-2" className="modal fade" style={{display: 'none'}}>
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                                                                    <h4 className="modal-title">Inline Form In modal</h4>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form className="form-inline">
                                                                        <div className="form-group">
                                                                            <input type="text" className="form-control" placeholder="Username" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <input type="password" className="form-control" placeholder="Password" />
                                                                        </div>
                                                                        <div className="form-group pull-right">
                                                                            <button type="button" className="btn btn-primary ">Sign in</button>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="cbr-inline form-label">
                                                                                <input type="checkbox" className="iCheck" defaultChecked /> <span>Remember</span>
                                                                            </label>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END */}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-xs-12">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Inline Form</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down" />
                                            <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
                                            <a className="box_close fa fa-times" />
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <form className="form-inline">
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Enter email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
                                                    </div>
                                                    <div className style={{margin: '0px 15px'}}>
                                                        <label>
                                                            <input type="checkbox" className="iCheck" /> Remember me
                                                        </label>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                                    <button type="button" className="btn btn-purple pull-right">Register</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* MAIN CONTENT AREA ENDS */}
                        </div>
                    </section>
                    {/* END CONTENT */}
                    <div className="page-chatapi hideit">
                        <div className="search-bar">
                            <input type="text" placeholder="Search" className="form-control" />
                        </div>
                        <div className="chat-wrapper">
                            <h4 className="group-head">Favourites</h4>
                            <ul className="contact-list">
                                <li className="user-row " id="chat_user_1" data-user-id={1}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../images/profile/avatar-1.png" alt="" /></a>*/}
                                        <a href="#"><img src="../../../images/profile/avatar-1.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Joge Lucky</a></h4>
                                        <span className="status available" data-status="available"> Available</span>
                                    </div>
                                    <div className="user-status available">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_2" data-user-id={2}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-2.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Folisise Chosiel</a></h4>
                                        <span className="status away" data-status="away"> Away</span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_3" data-user-id={3}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-3.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Aron Gonzalez</a></h4>
                                        <span className="status busy" data-status="busy"> Busy</span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                            </ul>
                            <h4 className="group-head">More Contacts</h4>
                            <ul className="contact-list">
                                <li className="user-row " id="chat_user_4" data-user-id={4}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-4.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Chris Fox</a></h4>
                                        <span className="status offline" data-status="offline"> Offline</span>
                                    </div>
                                    <div className="user-status offline">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_5" data-user-id={5}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-5.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Mogen Polish</a></h4>
                                        <span className="status offline" data-status="offline"> Offline</span>
                                    </div>
                                    <div className="user-status offline">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_6" data-user-id={6}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-1.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Smith Carter</a></h4>
                                        <span className="status available" data-status="available"> Available</span>
                                    </div>
                                    <div className="user-status available">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_7" data-user-id={7}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-2.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Amilia Gozenal</a></h4>
                                        <span className="status busy" data-status="busy"> Busy</span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_8" data-user-id={8}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-3.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Tahir Jemyship</a></h4>
                                        <span className="status away" data-status="away"> Away</span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_9" data-user-id={9}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-4.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Johanson Wright</a></h4>
                                        <span className="status busy" data-status="busy"> Busy</span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_10" data-user-id={10}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-5.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Loni Tindall</a></h4>
                                        <span className="status away" data-status="away"> Away</span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_11" data-user-id={11}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-1.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Natcho Herlaey</a></h4>
                                        <span className="status idle" data-status="idle"> Idle</span>
                                    </div>
                                    <div className="user-status idle">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_12" data-user-id={12}>
                                    <div className="user-img">
                                        <a href="#"><img src="../../../images/profile/avatar-2.png" alt="" /></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Shakira Swedan</a></h4>
                                        <span className="status idle" data-status="idle"> Idle</span>
                                    </div>
                                    <div className="user-status idle">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chatapi-windows ">
                    </div>
                </div>
                {/* END CONTAINER */}
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default compose(
    withAuthorization(condition),
)(PreMadeForm);
