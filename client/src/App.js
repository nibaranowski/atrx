import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentCompany } from './actions/companyActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import NavBar from './components/layout/NavBar';
import SideBar from './components/layout/SideBar';
//import Settingsbar from './components/layout/Settingsbar';
//import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CreateOrJoin from './components/signup-flow/CreateOrJoin';
import InviteUsers from './components/signup-flow/InviteUsers';
import NewCompany from './components/signup-flow/NewCompany';
//import Dashboard from './components/dashboard/Dashboard';

//import Test actions components
// import CreateTest from './components/test/test-actions/CreateTest';
// import EditTest from './components/test/test-actions/EditTest';

//import AdminUser actions components
//import CreateAdminUser from './components/admin-user/admin-user-actions/CreateAdminUser';
//import EditAdminUser from './components/admin-user/admin-user-actions/EditAdminUser';

//import Company actions components
import CreateCompany from './components/company/company-actions/CreateCompany';
//import EditCompany from './components/company/company-actions/EditCompany';

//import Company entities components
import Define from './components/company/company-content/Define';
import Hire from './components/company/company-content/Hire';
import Onboard from './components/company/company-content/Onboard';
import Coach from './components/company/company-content/Coach';
import Analyze from './components/company/company-content/Analyze';
import Terminate from './components/company/company-content/Terminate';


// //import Department actions components
// import CreateDepartment from './components/department/department-actions/CreateDepartment';
// import EditDepartment from './components/department/department-actions/EditDepartment';
//
// //import Team actions components
// import CreateTeam from './components/team/team-actions/CreateTeam';
// import EditTeam from './components/team/team-actions/EditTeam';
//
// //import Position actions components
// import CreatePosition from './components/position/position-actions/CreatePosition';
// import EditPosition from './components/position/position-actions/EditPosition';
//
// //import User actions components
// import CreateUser from './components/user/user-actions/CreateUser';
// import EditUser from './components/user/user-actions/EditUser';
//
// //import Position actions components
// import CreatePosition from './components/position-hiring-board/position-hiring-board-actions/CreatePosition';
// import EditPosition from './components/position-hiring-board/position-hiring-board-actions/EditPosition';
//
// //import Position actions components
// import CreatePositionH from './components/position-hiring-plan/position-hiring-plan-actions/CreatePositionH';
// import EditPositionH from './components/position-hiring-plan/position-hiring-plan-actions/EditPositionH';
//
// //import OnboardChecklist actions components
// import CreateOnboardChecklist from './components/onboard-checklist/onboard-checklist-actions/CreateOnboardChecklist';
// import EditOnboardChecklist from './components/onboard-checklist/onboard-checklist-actions/EditOnboardChecklist';
//
//
// //import TerminateChecklist actions components
// import CreateTerminateChecklist from './components/terminate-checklist/terminate-checklist-actions/CreateTerminateChecklist';
// import EditTerminateChecklist from './components/terminate-checklist/terminate-checklist-actions/EditTerminateChecklist';

//import OneToOne actions sub-components
import CreateOneToOne from './components/user/one-to-one/one-to-one-actions/CreateOneToOne';
//import EditOneToOne from './components/user/one-to-one/one-to-one-actions/EditOneToOne';

// //import Stage actions sub-components
// import CreateStage from './components/position-hiring-board/stage/stage-actions/CreateStage';
// import EditStage from './components/position-hiring-board/stage/stage-actions/EditStage';
//
// //import Lead actions sub-components
// import CreateLead from './components/position-hiring-board/lead/lead-actions/CreateLead';
// import EditLead from './components/position-hiring-board/lead/lead-actions/EditLead';
//
// //import OnboardTask actions sub-components
// import CreateOnboardTask from './components/onboard-checklist/onboard-task/onboard-task-actions/CreateOnboardTask';
// import EditOnboardTask from './components/onboard-checklist/onboard-task/onboard-task-actions/EditOnboardTask';
//
// //import TerminateTask actions sub-components
// import CreateTerminateTask from './components/terminate-checklist/terminate-task/terminate-task-actions/CreateTerminateTask';
// import EditTerminateTask from './components/terminate-checklist/terminate-task/terminate-task-actions/EditTerminateTask';

//import Test components
// import Tests from './components/test/tests/Tests';
// import Test from './components/test/test/Test';

//import Company components
import Companys from './components/company/companys-content/Companys';
import Company from './components/company/company-content/Company';

//import User components
import Users from './components/user/users-content/Users';
import User from './components/user/user-content/User';

//import OneToOne components
import OneToOnes from './components/user/one-to-one/one-to-ones-content/OneToOnes';
import OneToOne from './components/user/one-to-one/one-to-one-content/OneToOne';

//import Test components
//import Tests from './components/test/tests/Tests';
//import Test from './components/test/test/Test';

// <todo> must still be done for the rest e.g. department etc

import NotFound from './components/not-found/NotFound';


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get one-to-one info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Company
    store.dispatch(clearCurrentCompany());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
              {/*<Settingsbar />*/}
              <Route exact path="/" component={Landing} />
              <Route exact path="/not-found" component={NotFound} />
              <div className="main-content-app">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <div className="container-fluid page-body-wrapper" style={{marginTop: '63px'}}>
                    <NavBar />
                    <SideBar />
                    {/* <h3>hello world</h3> */}
                    {/* <h1>hello world</h1> */}
                    {/* <CreateCompany /> */}
                    {/* <div className="template-demo">
                      <button type="button" className="btn btn-success btn-fw">Create Company</button>
                      <button type="button" className="btn btn-secondary btn-fw">Secondary</button>
                      <button type="button" className="btn btn-success btn-fw">Success</button>
                      <button type="button" className="btn btn-danger btn-fw">Danger</button>
                      <button type="button" className="btn btn-warning btn-fw">Warning</button>
                      <button type="button" className="btn btn-info btn-fw">Info</button>
                      <button type="button" className="btn btn-light btn-fw">Light</button>
                      <button type="button" className="btn btn-dark btn-fw">Dark</button>
                      <button type="button" className="btn btn-link btn-fw">Link</button>
                    </div> */}
                    {/* <div className="child-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/mother/:mother_id/create-child"
                          component={CreateChild}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/mother/:mother_id/child/:child_id/edit-child"
                          component={EditChild}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/mother/:mother_id/child/all"
                          component={Childs}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/mother/:mother_id/child/:child_id"
                          component={Child}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="company-routes"> */}
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/AdminUserId/create-company"
                          component={CreateCompany}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:email/create-or-join"
                          component={CreateOrJoin}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/adminUserId/company/companyId/invite-users"
                          component={InviteUsers}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/adminUserId/company/companyId/new-company"
                          component={NewCompany}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id/define"
                          component={Define}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id/hire"
                          component={Hire}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id/onboard"
                          component={Onboard}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id/coach"
                          component={Coach}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id/analyze"
                          component={Analyze}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id/terminate"
                          component={Terminate}
                        />
                      </Switch>


                      {/* <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id/edit-company"
                          component={EditCompany}
                        />
                      </Switch> */}
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/all"
                          component={Companys}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/admin-user/:adminUser_id/company/:company_id"
                          component={Company}
                        />
                      </Switch>
                    {/* </div> */}
                    {/* <div className="department-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/company/:company_id/create-department"
                          component={CreateDepartment}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/company/:company_id/department/:department_id/edit-department"
                          component={EditDepartment}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/company/:company_id/department/all"
                          component={Departments}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/company/:company_id/department/:department_id"
                          component={Department}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="team-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/department/:department_id/create-team"
                          component={CreateTeam}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/department/:department_id/team/:team_id/edit-team"
                          component={EditTeam}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/department/:department_id/team/all"
                          component={Teams}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/department/:department_id/team/:team_id"
                          component={Team}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="position-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/team/:team_id/create-position"
                          component={CreatePosition}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/team/:team_id/position/:position_id/edit-position"
                          component={EditPosition}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/team/:team_id/position/all"
                          component={Positions}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/team/:team_id/position/:position_id"
                          component={Position}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="user-routes"> */}
                      {/* <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/create-user"
                          component={CreateUser}
                        />
                      </Switch> */}
                      {/* <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/user/:user_id/edit-user"
                          component={EditUser}
                        />
                      </Switch> */}
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/user/all"
                          component={Users}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/user/:user_id"
                          component={User}
                        />
                      </Switch>
                    {/* </div> */}
                    {/* <div className="position-hiring-board-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/create-positionHiringBoard"
                          component={CreatePositionHiringBoard}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/position-hiring-board/:positionHiringBoard_id/edit-positionHiringBoard"
                          component={EditPositionHiringBoard}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/position-hiring-board/all"
                          component={PositionHiringBoards}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/position-hiring-board/:positionHiringBoard_id"
                          component={PositionHiringBoard}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="position-hiring-plan-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/create-PositionHiringPlan"
                          component={CreatePositionHiringPlan}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/position-hiring-plan/:PositionHiringPlan_id/edit-PositionHiringPlan"
                          component={EditPositionHiringPlan}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/position-hiring-plan/all"
                          component={PositionHiringPlans}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/position-hiring-plan/:PositionHiringPlan_id"
                          component={PositionHiringPlan}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="onboard-cheklist-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/create-onboardChecklist"
                          component={CreateOnboardChecklist}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/onboard-checklist/:onboardChecklist_id/edit-onboardChecklist"
                          component={EditOnboardChecklist}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/onboard-checklist/all"
                          component={OnboardChecklists}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/onboard-checklist/:onboardChecklist_id"
                          component={OnboardChecklist}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="terminate-checklist-routes">
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/create-terminateChecklist"
                          component={CreateTerminateChecklist}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/terminate-checklist/:terminateChecklist_id/edit-terminateChecklist"
                          component={EditTerminateChecklist}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/terminate-checklist/all"
                          component={TerminateChecklists}
                        />
                      </Switch>
                      <Switch>
                        <PrivateRoute
                          exact path="/position/:position_id/terminate-checklist/:terminateChecklist_id"
                          component={TerminateChecklist}
                        />
                      </Switch>
                    </div> */}
                    {/* <div className="user-sub-routes">
                      <div className="one-to-one-routes"> */}
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/user/:user_id/create-oneToOne"
                            component={CreateOneToOne}
                          />
                        </Switch>
                        {/* <Switch>
                          <PrivateRoute
                            exact
                            path="/user/:user_id/one-to-one/:oneToOne_id/edit-oneToOne"
                            component={EditOneToOne}
                          />
                        </Switch> */}
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/user/:user_id/one-to-one/all"
                            component={OneToOnes}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/user/:user_id/one-to-one/:oneToOne_id"
                            component={OneToOne}
                          />
                        </Switch>
                      {/* </div>
                    </div> */}
                    {/* <div className="position-hiring-board-sub-routes">
                      <div className="stage-routes">
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/position-hiring-board/:positionHiringBoard_id/create-stage"
                            component={CreateStage}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/position-hiring-board/:positionHiringBoard_id/stage/:stage_id/edit-stage"
                            component={EditStage}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/position-hiring-board/:positionHiringBoard_id/stage/all"
                            component={Stages}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/position-hiring-board/:positionHiringBoard_id/stage/:stage_id"
                            component={Stage}
                          />
                        </Switch>
                      </div>
                      <div className="lead-routes">
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/stage/:stage_id/create-lead"
                            component={CreateLead}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/stage/:stage_id/lead/:lead_id/edit-lead"
                            component={EditLead}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/stage/:stage_id/lead/all"
                            component={Leads}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/stage/:stage_id/lead/:lead_id"
                            component={Lead}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div className="onboard-checklist-sub-routes">
                      <div className="onboard-task-routes">
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/onboard-checklist/:onboardChecklist_id/create-onboardTask"
                            component={CreateOnboardTask}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/onboard-checklist/:onboardChecklist_id/onboard-task/:onboardTask_id/edit-onboardTask"
                            component={EditOnboardTask}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/onboard-checklist/:onboardChecklist_id/onboard-task/all"
                            component={OnboardTasks}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/onboard-checklist/:onboardChecklist_id/onboard-task/:onboardTask_id"
                            component={OnboardTask}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div className="terminate-checklist-sub-routes">
                      <div className="terminate-task-routes">
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/terminate-checklist/:terminateChecklist_id/create-terminateTask"
                            component={CreateTerminateTask}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/terminate-checklist/:terminateChecklist_id/terminate-task/:terminateTask_id/edit-terminateTask"
                            component={EditTerminateTask}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/terminate-checklist/:terminateChecklist_id/terminate-task/all"
                            component={TerminateTasks}
                          />
                        </Switch>
                        <Switch>
                          <PrivateRoute
                            exact
                            path="/terminate-checklist/:terminateChecklist_id/terminate-task/:terminateTask_id"
                            component={TerminateTask}
                          />
                        </Switch>
                      </div>
                    </div> */}
                  </div>
              </div>
              {/*<Footer />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
