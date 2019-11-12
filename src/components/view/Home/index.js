import React, {Component} from 'react';
import {compose} from 'recompose';
import {withAuthorization} from '../../auth/Session'
import * as firebase from "firebase";

// import avatar from '../../images/profile/avatar-1.png'

class HomePage extends Component {
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
                        <div className="page-sidebar-wrapper crypto" id="main-menu-wrapper">
                            <ul className="wraplist">
                                <li className="menusection">Main</li>
                                <li className>
                                    <a href="index-crypto-dashboard.html">
                                        <i className="img relative crypto-ic ">
                                            {/*<img src="../../../public/data/crypto-dash/icons/1.png" alt="" className="ic1 width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/1.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Dashboard</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="crypto-wallet.html">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/2.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/2.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Crypto Wallet</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="crypto-buy-sell.html">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/6.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/6.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Buy &amp; Sell</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="crypto-ico-admin.html">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/4.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/4.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">ICO Admin</span>
                                        <span className="label label-accent">HOT</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="crypto-affiliate.html">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/8.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/8.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Affiliate Program</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="crypto-profile.html">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/10.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/10.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Trader Profile</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="crypto-faq.html">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/12.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/12.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Support</span>
                                    </a>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/11.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/11.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Settings</span>
                                        <span className="arrow "/>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="crypto-personal-setting.html">Personal Settings</a>
                                        </li>
                                        <li>
                                            <a className href="crypto-account-setting.html">Account Settings</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/9.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/9.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Access Pages</span>
                                        <span className="arrow "/>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className href="crypto-login.html">Login</a>
                                        </li>
                                        <li>
                                            <a className href="crypto-register.html">Registration</a>
                                        </li>
                                        <li>
                                            <a className href="ui-404.html">404</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/7.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/7.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Mailbox</span>
                                        <span className="arrow"/>
                                    </a>
                                    <ul className="sub-menu" style={{display: 'none'}}>
                                        <li>
                                            <a className href="crypto-mail-inbox.html">Inbox</a>
                                        </li>
                                        <li>
                                            <a className href="crypto-mail-compose.html">Compose</a>
                                        </li>
                                        <li>
                                            <a className href="crypto-mail-view.html">View</a>
                                        </li>
                                        <li>
                                            <a className href="crypto-mail-important.html">Important Mail</a>
                                        </li>
                                        <li>
                                            <a className href="crypto-mail-trash.html">Mail Trash</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menusection">Data Visualization</li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/16.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/16.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Echarts</span>
                                        <span className="arrow "/>
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
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/17.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/17.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Morris Charts</span>
                                        <span className="arrow "/>
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
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/18.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/18.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Charts JS</span>
                                        <span className="arrow"/>
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
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/19.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/19.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Flot Charts</span>
                                        <span className="arrow "/>
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
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/20.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/20.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Sparkline Charts</span>
                                        <span className="arrow "/>
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
                                <li className>
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img src="../../../images/crypto-dash/icons/13.png" alt="" className="width-20"/>
                                            <img src={require('../../../images/crypto-dash/icons/13.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Ui Elements</span> <span className="arrow "/> </a>
                                    <ul className="sub-menu">
                                        <li className>
                                            <a href="javascript:;"><span className="title">Timeline</span> <span
                                                className="arrow "/> </a>
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
                                            <a href="javascript:;"><span className="title">Pricing Tables</span> <span
                                                className="arrow "/> </a>
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
                                            <a href="javascript:;"><span className="title">Icon Sets</span> <span
                                                className="arrow "/> </a>
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
                                        <li>
                                            <a href="javascript:;"><span className="title">Form Elements</span> <span
                                                className="arrow "/> </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className href="form-elements.html">Field Elements</a>
                                                </li>
                                                <li>
                                                    <a className href="form-elements-premade.html">Pre Made Forms</a>
                                                </li>
                                                <li>
                                                    <a className
                                                       href="form-elements-icheck.html">Checkbox &amp; Radio</a>
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
                                            <a href="form-validation.html"> <span
                                                className="title">Form Validations</span> </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className>
                                    <a href="javascript:;">
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/14.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/14.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Components</span>
                                        <span className="arrow "/>
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
                                        <i className="img">
                                            {/*<img src="../../../public/data/crypto-dash/icons/15.png" alt="" className="width-20"/>*/}
                                            <img src={require('../../../images/crypto-dash/icons/15.png')} alt="" className="ic1 width-20"/>
                                        </i>
                                        <span className="title">Appearance</span>
                                        <span className="arrow "/>
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
                                        <h1 className="title">Crypto Dashboard</h1>
                                        {/* PAGE HEADING TAG - END */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <section className="box nobox marginBottom0">
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                                <div className="statistics-box">
                                                    <div className="mb-15">
                                                        <i className="pull-left ico-icon icon-md icon-primary">
                                                            {/*<img src="../../../public/data/crypto-dash/s1.png" className="ico-icon-o" alt=""/>*/}
                                                            <img src={require('../../../images/crypto-dash/s1.png')} alt="" className="ic1 width-20"/>
                                                        </i>
                                                        <div className="stats">
                                                            <h3 className="boldy mb-5">$4,456.98</h3>
                                                            <span>Account Balance</span>
                                                        </div>
                                                    </div>
                                                    <span className="crypto1"><canvas width={239} height={60}/></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                                <div className="statistics-box">
                                                    <div className="mb-15">
                                                        <i className="pull-left ico-icon icon-md icon-primary">
                                                            {/*<img src="../../../public/data/crypto-dash/s2.png" className="ico-icon-o" alt=""/>*/}
                                                            <img src={require('../../../images/crypto-dash/s2.png')} alt="" className="ic1 width-20"/>
                                                        </i>
                                                        <div className="stats">
                                                            <h3 className="boldy mb-5">$1,627.23</h3>
                                                            <span>Total Income</span>
                                                        </div>
                                                    </div>
                                                    <span className="crypto2"><canvas width={239} height={60}/></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                                <div className="statistics-box">
                                                    <div className="mb-15">
                                                        <i className="pull-left ico-icon icon-md icon-primary">
                                                            {/*<img src="../../../public/data/crypto-dash/s3.png" className="ico-icon-o" alt=""/>*/}
                                                            <img src={require('../../../images/crypto-dash/s3.png')} alt="" className="ic1 width-20"/>
                                                        </i>
                                                        <div className="stats">
                                                            <h3 className="boldy mb-5">232.76%</h3>
                                                            <span>Rate of Return</span>
                                                        </div>
                                                    </div>
                                                    <span className="crypto3"><canvas width={239} height={60}/></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                                <div className="statistics-box">
                                                    <div className="mb-15">
                                                        <i className="pull-left ico-icon icon-md icon-primary">
                                                            {/*<img src="../../../public/data/crypto-dash/s4.png" className="ico-icon-o" alt=""/>*/}
                                                            <img src={require('../../../images/crypto-dash/s4.png')} alt="" className="ic1 width-20"/>
                                                        </i>
                                                        <div className="stats">
                                                            <h3 className="boldy mb-5">1,345</h3>
                                                            <span>Number of Trades</span>
                                                        </div>
                                                    </div>
                                                    <span className="crypto4"><canvas width={239} height={60}/></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End .row */}
                                    </div>
                                </section>
                            </div>
                            <div className="clearfix"/>
                            {/* MAIN CONTENT AREA STARTS */}
                            <div className="col-xs-12">
                                <div className="pull-left">
                                    {/* PAGE HEADING TAG - START */}
                                    <h4 className="title boldy mb-5 mt-15">Crypto Balance</h4>
                                    {/* PAGE HEADING TAG - END */}
                                </div>
                            </div>
                            <div className="clearfix"/>
                            <div className="col-lg-9 mt-15 mb-15">
                                <section className="wra">
                                    <div className="swiper-container coins-slider text-center">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="coin-box flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin1.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin1.png')} alt=""/>
                                                    </div>
                                                    <div className="coin-balance text-left">
                                                        <h5 className="coin-name boldy">Bitcoin Balance</h5>
                                                        <p className="mb-0">0.312373<i
                                                            className="complete fa fa-arrow-up ml-10"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="coin-box flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin2.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin2.png')} alt=""/>
                                                    </div>
                                                    <div className="coin-balance text-left">
                                                        <h5 className="coin-name boldy">Eth Balance</h5>
                                                        <p className="mb-0">1.007346<i
                                                            className="cancelled fa fa-arrow-down ml-10"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="coin-box flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin3.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin3.png')} alt=""/>
                                                    </div>
                                                    <div className="coin-balance text-left">
                                                        <h5 className="coin-name boldy">Dash Balance</h5>
                                                        <p className="mb-0">0.008923<i
                                                            className="complete fa fa-arrow-up ml-10"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="coin-box flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin4.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin4.png')} alt=""/>
                                                    </div>
                                                    <div className="coin-balance text-left">
                                                        <h5 className="coin-name boldy">Ripple Balance</h5>
                                                        <p className="mb-0">210.3123<i
                                                            className="complete fa fa-arrow-up ml-10"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="coin-box flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin5.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin5.png')} alt=""/>
                                                    </div>
                                                    <div className="coin-balance text-left">
                                                        <h5 className="coin-name boldy">Bitcoincash</h5>
                                                        <p className="mb-0">2.092832<i
                                                            className="complete fa fa-arrow-up ml-10"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="coin-box flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin6.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin6.png')} alt=""/>
                                                    </div>
                                                    <div className="coin-balance text-left">
                                                        <h5 className="coin-name boldy">Doge Balance</h5>
                                                        <p className="mb-0">877393,12<i
                                                            className="cancelled fa fa-arrow-down ml-10"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="coin-box flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin7.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin7.png')} alt=""/>
                                                    </div>
                                                    <div className="coin-balance text-left">
                                                        <h5 className="coin-name boldy">Monero Balance</h5>
                                                        <p className="mb-0">1.932845<i
                                                            className="complete fa fa-arrow-up ml-10"/></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="apg-arrows">
                                        {/* Add Navigation */}
                                        <div className="swiper-button-prev"/>
                                        <div className="swiper-button-next"/>
                                    </div>
                                </section>
                            </div>
                            <div className="col-md-1"/>
                            <div className="col-lg-2 no-pl mt-15 mb-15">
                                <button type="button" className="btn btn-primary gradient-blue" style={{width: '100%'}}>
                                    <div><span className="add-plus fa fa-plus"/></div>
                                    Add More
                                </button>
                            </div>
                            <div className="clearfix"/>
                            <div className="col-lg-8">
                                <section className="box" style={{overflow: 'hidden'}}>
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Crypto Balance Statistics</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down"/>
                                            <a className="box_setting fa fa-cog" data-toggle="modal"
                                               href="#section-settings"/>
                                            <a className="box_close fa fa-times"/>
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div id="crypto-chart">
                                                    <div id="demoarea-container" style={{
                                                        width: '100%',
                                                        height: '380px',
                                                        textAlign: 'center',
                                                        margin: '0 auto'
                                                    }}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Stock Status</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down"/>
                                            <a className="box_setting fa fa-cog" data-toggle="modal"
                                               href="#section-settings"/>
                                            <a className="box_close fa fa-times"/>
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="coin-box2 flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin1.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin1.png')} alt=""/>
                                                    </div>
                                                    <h5 className="coin-name boldy">Bitcoin</h5>
                                                    <h5 className="coin-price boldy">$8.958</h5>
                                                    <p className="mb-0 green-text">4.98%<i
                                                        className="complete fa fa-arrow-up ml-10"/></p>
                                                </div>
                                                <div className="coin-box2 flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin2.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin2.png')} alt=""/>
                                                    </div>
                                                    <h5 className="coin-name boldy">Ethereum</h5>
                                                    <h5 className="coin-price boldy">$1.958</h5>
                                                    <p className="mb-0 red-text">3.45%<i
                                                        className="cancelled fa fa-arrow-down ml-10"/></p>
                                                </div>
                                                <div className="coin-box2 flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin3.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin3.png')} alt=""/>
                                                    </div>
                                                    <h5 className="coin-name boldy">Dashcoin</h5>
                                                    <h5 className="coin-price boldy">$838,45</h5>
                                                    <p className="mb-0 green-text">3.45%<i
                                                        className="complete fa fa-arrow-up ml-10"/></p>
                                                </div>
                                                <div className="coin-box2 flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin8.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin8.png')} alt=""/>
                                                    </div>
                                                    <h5 className="coin-name boldy">Litecoin</h5>
                                                    <h5 className="coin-price boldy">$308,09</h5>
                                                    <p className="mb-0 red-text">2.05%<i
                                                        className="cancelled fa fa-arrow-down ml-10"/></p>
                                                </div>
                                                <div className="coin-box2 flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin6.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin6.png')} alt=""/>
                                                    </div>
                                                    <h5 className="coin-name boldy">Dogecoin</h5>
                                                    <h5 className="coin-price boldy">$0.0846</h5>
                                                    <p className="mb-0 green-text">2.05%<i
                                                        className="complete fa fa-arrow-up ml-10"/></p>
                                                </div>
                                                <div className="coin-box2 mb-0 flex align-items-center">
                                                    <div className="coin-icon mr-10">
                                                        {/*<img src="../../../public/data/crypto-dash/coin7.png" alt=""/>*/}
                                                        <img src={require('../../../images/crypto-dash/coin7.png')} alt=""/>
                                                    </div>
                                                    <h5 className="coin-name boldy">Monero</h5>
                                                    <h5 className="coin-price boldy">$475.048</h5>
                                                    <p className="mb-0 green-text">2.05%<i
                                                        className="complete fa fa-arrow-up ml-10"/></p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End .row */}
                                    </div>
                                </section>
                            </div>
                            <div className="clearfix"/>
                            <div className="col-xs-12 col-md-4">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Transactions Status</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down"/>
                                            <a className="box_setting fa fa-cog" data-toggle="modal"
                                               href="#section-settings"/>
                                            <a className="box_close fa fa-times"/>
                                        </div>
                                    </header>
                                    <div className="content-body pb10">
                                        <div className="row">
                                            <div
                                                className="col-xs-8 col-md-offset-2 col-sm-offset-2 col-xs-offset-2 mb-20">
                                                <canvas id="donut-chartjs" width={400} height={400}/>
                                            </div>
                                            <div className="col-md-6 col-xs-12">
                                                <div className="token-info">
                                                    <div className="info-wrapper three">
                                                        <div className="token-descr">
                                                            <h3 className="bold mt-0 mb-0">44%</h3>
                                                            Completed
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xs-12">
                                                <div className="token-info">
                                                    <div className="info-wrapper five">
                                                        <div className="token-descr">
                                                            <h3 className="bold mt-0 mb-0">34%</h3>
                                                            Pending
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xs-12">
                                                <div className="token-info">
                                                    <div className="info-wrapper two">
                                                        <div className="token-descr">
                                                            <h3 className="bold mt-0 mb-0">22%</h3>
                                                            Cancelled
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-xs-12">
                                                <div className="token-info">
                                                    <div className="info-wrapper default">
                                                        <div className="token-descr">
                                                            <h3 className="bold mt-0 mb-0">14%</h3>
                                                            Others
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="r1_graph1 db_box db_box_large has-shadow2 mt-15">
                                            <div className="pat-info-wrapper">
                                                <div className="pat-info text-left">
                                                    <h5 className>Total Funds</h5>
                                                    <h6>Complete transactions</h6>
                                                </div>
                                                <div className="pat-val relative">
                                                    <h4 className="value blue-text"><i
                                                        className="complete fa fa-arrow-up"/>124%<span>increase By</span>
                                                    </h4>
                                                </div>
                                            </div>
                                            <span className="sparkline15">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="r1_graph1 db_box db_box_large has-shadow2 mt-15">
                                            <div className="promp-box text-center">
                                                {/*<img src="../../../public/data/crypto-dash/crypto-wallet.png" alt=""/>*/}
                                                <img src={require('../../../images/crypto-dash/crypto-wallet.png')} alt=""/>
                                                <h4 className="boldy mt-20 mb-10">Start crypto trading Today</h4>
                                                <p>Lorem ipsum dolor sit amet, Eveniet magni sit explicabo Quo nihil
                                                    atque.</p>
                                                <div className="form-group no-mb">
                                                    <a href="crypto-trading.html"
                                                       className="btn btn-primary btn-lg mt-20 gradient-blue"
                                                       style={{width: '100%'}}>
                                                        Start Trading</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <div className="col-lg-12">
                                        <div className="ask-box active">
                                            <div className="ask-circle">
                                                {/*<img src="../../../public/data/crypto-dash/crypto-buy.png" alt=""/>*/}
                                                <img src={require('../../../images/crypto-dash/crypto-buy.png')} alt=""/>
                                            </div>
                                            <div className="ask-info">
                                                <h3 className="w-text bold">Buy &amp; Sell Crypto Directly and
                                                    Easily</h3>
                                                <p className="g2-text mb-0">lorem ipsum dolor sit elit. Perferendis
                                                    veniam exercitationem ducimus magni
                                                    distinctio sit explicabo.</p>
                                            </div>
                                            <div className="ask-arrow">
                                                <a href="crypto-buy-sell.html"><span className="fa fa-angle-right"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"/>
                            <div className="col-lg-6">
                                <section className="box">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Recent Activities</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down"/>
                                            <a className="box_setting fa fa-cog" data-toggle="modal"
                                               href="#section-settings"/>
                                            <a className="box_close fa fa-times"/>
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="table-responsive" data-pattern="priority-columns">
                                                    <table id="tech-companies-1"
                                                           className="table vm table-small-font no-mb table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Crypto Orders</th>
                                                            <th>Status</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/p1.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/p1.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Buy Record</h6>
                                                                    <small className="text-muted"><span
                                                                        className="mr-10">11-26</span> 10:23:45</small>
                                                                </div>
                                                            </td>
                                                            <td><span
                                                                className="badge  w-70 round-success">completed</span>
                                                            </td>
                                                            <td className="green-text boldy">+3,800$</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/p2.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/p2.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Sell Record</h6>
                                                                    <small className="text-muted"><span
                                                                        className="mr-10">11-25</span> 12:53:25</small>
                                                                </div>
                                                            </td>
                                                            <td><span
                                                                className="badge w-70 round-warning">Pending</span></td>
                                                            <td className="red-text boldy">-1,760$</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/p3.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/p3.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Exchange Record</h6>
                                                                    <small className="text-muted"><span
                                                                        className="mr-10">11-24</span> 04:03:25</small>
                                                                </div>
                                                            </td>
                                                            <td><span
                                                                className="badge w-70 round-primary">exchanged </span>
                                                            </td>
                                                            <td className="blue-text boldy">+20,760$</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/p1.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/p1.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Buy Record</h6>
                                                                    <small className="text-muted"><span
                                                                        className="mr-10">11-22</span> 09:33:02</small>
                                                                </div>
                                                            </td>
                                                            <td><span
                                                                className="badge w-70 round-danger">Canceled</span></td>
                                                            <td className="green-text boldy">+10,760$</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/p2.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/p2.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Buy Record</h6>
                                                                    <small className="text-muted"><span
                                                                        className="mr-10">11-22</span> 09:33:02</small>
                                                                </div>
                                                            </td>
                                                            <td><span
                                                                className="badge w-70 round-success">Completed</span>
                                                            </td>
                                                            <td className="red-text boldy">-8,760$</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-6">
                                <section className="box">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Transactions History</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down"/>
                                            <a className="box_setting fa fa-cog" data-toggle="modal"
                                               href="#section-settings"/>
                                            <a className="box_close fa fa-times"/>
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="table-responsive" data-pattern="priority-columns">
                                                    <table id="tech-companies-1"
                                                           className="table vm trans table-small-font no-mb table-bordered table-striped">
                                                        <thead>
                                                        <tr>
                                                            <th>Crypto Trade</th>
                                                            <th>Time</th>
                                                            <th>Status</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/coin1.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/coin1.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Bitcoin</h6>
                                                                </div>
                                                            </td>
                                                            <td><small className="text-muted">10:23:45</small></td>
                                                            <td><span
                                                                className="badge  w-70 round-success">completed</span>
                                                            </td>
                                                            <td className="green-text boldy">+0,041BTC</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/coin8.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/coin8.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Litecoin</h6>
                                                                </div>
                                                            </td>
                                                            <td><small className="text-muted">12:53:25</small></td>
                                                            <td><span
                                                                className="badge w-70 round-warning">Pending</span></td>
                                                            <td className="red-text boldy">-1,176LTC</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/coin2.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/coin2.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Ethereum</h6>
                                                                </div>
                                                            </td>
                                                            <td><small className="text-muted">04:03:25</small></td>
                                                            <td><span
                                                                className="badge w-70 round-primary">exchanged </span>
                                                            </td>
                                                            <td className="blue-text boldy">0.023ETH</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/coin4.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/coin4.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Ripple</h6>
                                                                </div>
                                                            </td>
                                                            <td><small className="text-muted"> 09:33:02</small></td>
                                                            <td><span
                                                                className="badge w-70 round-danger">Canceled</span></td>
                                                            <td className="green-text boldy">+107,0XRP</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/coin1.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/coin1.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Bitcoin</h6>
                                                                </div>
                                                            </td>
                                                            <td><small className="text-muted">10:23:45</small></td>
                                                            <td><span
                                                                className="badge  w-70 round-warning">pending</span>
                                                            </td>
                                                            <td className="green-text boldy">-0,098BTC</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/coin3.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/coin3.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Dashcoin</h6>
                                                                </div>
                                                            </td>
                                                            <td><small className="text-muted">09:33:02</small></td>
                                                            <td><span
                                                                className="badge w-70 round-success">Completed</span>
                                                            </td>
                                                            <td className="red-text boldy">-2,76DAH</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="round img2">
                                                                    {/*<img src="../../../public/data/crypto-dash/coin5.png" alt=""/>*/}
                                                                    <img src={require('../../../images/crypto-dash/coin5.png')} alt=""/>
                                                                </div>
                                                                <div className="designer-info">
                                                                    <h6>Bitdash</h6>
                                                                </div>
                                                            </td>
                                                            <td><small className="text-muted">09:33:02</small></td>
                                                            <td><span
                                                                className="badge w-70 round-success">Completed</span>
                                                            </td>
                                                            <td className="green-text boldy">+1,429DAH</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="clearfix"/>
                            {/* MAIN CONTENT AREA ENDS */}
                        </div>
                    </section>
                    {/* END CONTENT */}
                    <div className="page-chatapi hideit">
                        <div className="search-bar">
                            <input type="text" placeholder="Search" className="form-control"/>
                        </div>
                        <div className="chat-wrapper">
                            <h4 className="group-head">Favourites</h4>
                            <ul className="contact-list">
                                <li className="user-row " id="chat_user_1" data-user-id={1}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-1.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-1.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Joge Lucky</a></h4>
                                        <span className="status available" data-status="available"> Available</span>
                                    </div>
                                    <div className="user-status available">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_2" data-user-id={2}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-2.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-2.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Folisise Chosiel</a></h4>
                                        <span className="status away" data-status="away"> Away</span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_3" data-user-id={3}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-3.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-3.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Aron Gonzalez</a></h4>
                                        <span className="status busy" data-status="busy"> Busy</span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                            </ul>
                            <h4 className="group-head">More Contacts</h4>
                            <ul className="contact-list">
                                <li className="user-row " id="chat_user_4" data-user-id={4}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-4.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-4.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Chris Fox</a></h4>
                                        <span className="status offline" data-status="offline"> Offline</span>
                                    </div>
                                    <div className="user-status offline">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_5" data-user-id={5}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-5.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-5.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Mogen Polish</a></h4>
                                        <span className="status offline" data-status="offline"> Offline</span>
                                    </div>
                                    <div className="user-status offline">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_6" data-user-id={6}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-1.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-1.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Smith Carter</a></h4>
                                        <span className="status available" data-status="available"> Available</span>
                                    </div>
                                    <div className="user-status available">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_7" data-user-id={7}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-2.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-2.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Amilia Gozenal</a></h4>
                                        <span className="status busy" data-status="busy"> Busy</span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_8" data-user-id={8}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-3.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-3.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Tahir Jemyship</a></h4>
                                        <span className="status away" data-status="away"> Away</span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_9" data-user-id={9}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-4.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-4.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Johanson Wright</a></h4>
                                        <span className="status busy" data-status="busy"> Busy</span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_10" data-user-id={10}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-5.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-5.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Loni Tindall</a></h4>
                                        <span className="status away" data-status="away"> Away</span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_11" data-user-id={11}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-1.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-1.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Natcho Herlaey</a></h4>
                                        <span className="status idle" data-status="idle"> Idle</span>
                                    </div>
                                    <div className="user-status idle">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_12" data-user-id={12}>
                                    <div className="user-img">
                                        {/*<a href="#"><img src="../../../public/data/profile/avatar-2.png" alt=""/></a>*/}
                                        <a href="#"><img src={require('../../../images/profile/avatar-2.png')} alt=""/></a>
                                    </div>
                                    <div className="user-info">
                                        <h4><a href="#">Shakira Swedan</a></h4>
                                        <span className="status idle" data-status="idle"> Idle</span>
                                    </div>
                                    <div className="user-status idle">
                                        <i className="fa fa-circle"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chatapi-windows ">
                    </div>
                </div>
                {/* END CONTAINER */}
                {/* LOAD FILES AT PAGE END FOR FASTER LOADING */}
            </div>
        )
    }
}

const condition = authUser => !!authUser;

export default compose(
    withAuthorization(condition),
)(HomePage);
