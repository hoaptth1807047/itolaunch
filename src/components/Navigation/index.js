import React from 'react';
import {Link} from 'react-router-dom';

import {AuthUserContext} from '../auth/Session';
import SignOutButton from '../auth/SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <NavigationAuth authUser={authUser}/>
            ) : (
                <NavigationNonAuth/>
            )
        }
    </AuthUserContext.Consumer>
);

const NavigationAuth = ({authUser}) => (
    // START TOPBAR

    <div className="page-topbar gradient-blue1">
        <div className="logo-area crypto">
        </div>
        <div className="quick-area">
            <div className="pull-left">
                <ul className="info-menu left-links list-inline list-unstyled">
                    <li className="sidebar-toggle-wrap">
                        <a href="#" data-toggle="sidebar" className="sidebar_toggle">
                            <i className="fa fa-bars"/>
                        </a>
                    </li>
                    <li className="topnav-item item1">
                        <a href="#" className="new-link w-text">Schedule
                            <span className="badge badge-primary ml-5">New</span>
                        </a>
                    </li>
                    <li className="topnav-item active item2">
                        <a href="#" className="nav-link w-text">
                            <i className="fa fa-area-chart mr-10"/>Reports
                        </a>
                    </li>
                    <li className="topnav-item item3">
                        <a href="#" className="nav-link w-text">
                            <i className="fa fa-sitemap mr-10"/>Trading
                        </a>
                    </li>
                    <li className="hidden-sm hidden-xs searchform">
                        <form action="#" method="post">
                            <div className="input-group">
                                                  <span className="input-group-addon">
                                                    <i className="fa fa-search"/>
                                                  </span>
                                <input type="text" className="form-control animated fadeIn"
                                       placeholder="Search & Enter"/>
                            </div>
                            <input type="submit" defaultValue/>
                        </form>
                    </li>
                </ul>
            </div>
            <div className="pull-right">
                <ul className="info-menu right-links list-inline list-unstyled">
                    <li className=" spec">
                        <a href="#" data-toggle="dropdown" className="toggle">
                            <i className="fa fa-bell"/>
                            <span className="badge badge-accent">3</span>
                        </a>
                        <ul className="dropdown-menu notifications animated fadeIn">
                            <li className="total">
                      <span className="small">
                        You have <strong>3</strong> new notifications.
                        <a href="javascript:;" className="pull-right">Mark all as Read</a>
                      </span>
                            </li>
                            <li className="list">
                                <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                                    <li className="unread available">
                                        {/* available: success, warning, info, error */}
                                        <a href="javascript:;">
                                            <div className="notice-icon">
                                                <i className="fa fa-check"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Successful transaction of 0.01 BTC</strong>
                                <span className="time small">15 mins ago</span>
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="unread away">
                                        {/* available: success, warning, info, error */}
                                        <a href="javascript:;">
                                            <div className="notice-icon">
                                                <i className="fa fa-clock-o"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>4 of Pending Transactions!</strong>
                                <span className="time small">45 mins ago</span>
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" busy">
                                        {/* available: success, warning, info, error */}
                                        <a href="javascript:;">
                                            <div className="notice-icon">
                                                <i className="fa fa-times"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Cancelled Order of 200 ICO</strong>
                                <span className="time small">1 hour ago</span>
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" available">
                                        {/* available: success, warning, info, error */}
                                        <a href="javascript:;">
                                            <div className="notice-icon">
                                                <i className="fa fa-check"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Great Speed Notify of 1.34 LTC</strong>
                                <span className="time small">14th Mar</span>
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="external">
                                <a href="javascript:;">
                                    <span>Read All Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className=" spec">
                        <a href="#" data-toggle="dropdown" className="toggle mr-15">
                            <i className="fa fa-envelope"/>
                            <span className="badge badge-accent">7</span>
                        </a>
                        <ul className="dropdown-menu messages animated fadeIn">
                            <li className="list">
                                <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                                    <li className="unread status-available">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-1.png')} alt=""

                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Clarine Vassar</strong>
                                <span className="time small">- 15 mins ago</span>
                                <span className="profile-status available pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" status-away">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-2.png')} alt=""
                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Brooks Latshaw</strong>
                                <span className="time small">- 45 mins ago</span>
                                <span className="profile-status away pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" status-busy">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-3.png')} alt=""
                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Clementina Brodeur</strong>
                                <span className="time small">- 1 hour ago</span>
                                <span className="profile-status busy pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" status-offline">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-4.png')} alt=""
                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Carri Busey</strong>
                                <span className="time small">- 5 hours ago</span>
                                <span className="profile-status offline pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" status-offline">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-5.png')} alt=""
                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Melissa Dock</strong>
                                <span className="time small">- Yesterday</span>
                                <span className="profile-status offline pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" status-available">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-1.png')} alt=""
                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Verdell Rea</strong>
                                <span className="time small">- 14th Mar</span>
                                <span className="profile-status available pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" status-busy">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-2.png')} alt=""
                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Linette Lheureux</strong>
                                <span className="time small">- 16th Mar</span>
                                <span className="profile-status busy pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className=" status-away">
                                        <a href="javascript:;">
                                            <div className="user-img">
                                                <img src={require('../../images/profile/avatar-3.png')} alt=""
                                                     className="img-circle img-inline"/>
                                            </div>
                                            <div>
                              <span className="name">
                                <strong>Araceli Boatright</strong>
                                <span className="time small">- 16th Mar</span>
                                <span className="profile-status away pull-right"/>
                              </span>
                                                <span className="desc small">
                                Lorem ipsum dolor sit elit fugiat molest.
                              </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="external">
                                <a href="javascript:;">
                                    <span>Read All Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="profile">
                        <a href="#" data-toggle="dropdown" className="toggle">
                            <img src={require('../../images/profile/avatar-1.png')} alt=""
                                 className="img-circle img-inline"/>
                            <span>Arnold Ramsy <i className="fa fa-angle-down"/></span>
                        </a>
                        <ul className="dropdown-menu profile animated fadeIn">
                            <li>
                                <a href="crypto-account-setting.html">
                                    <i className="fa fa-wrench"/> Settings
                                </a>
                            </li>
                            <li>
                                <a href="crypto-profile.html">
                                    <i className="fa fa-user"/> Profile
                                </a>
                            </li>
                            <li>
                                <a href="crypto-support.html">
                                    <i className="fa fa-info"/> Help
                                </a>
                            </li>
                            <li className="last">
                                <a href="crypto-login.html">
                                    <i className="fa fa-lock"/> <SignOutButton/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
// END TOPBAR
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;
