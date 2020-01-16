import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import BusinessPage from "./pages/BusinessPage";
import NavBar from "./components/NavBar";
import Signin from "./pages/Signin/index";
import ProfilePage from "./pages/ProfilePage/index";
import AddBusiness from "./pages/AddBusiness";
import ProfileBusinesList from "./pages/ProfileBusinessList";
import "./App.scss";

class App extends Component {
  render(props) {
    return (
      <Fragment>
        <NavBar setLang={this.props.setLang} />
        <Switch className="App">
          <Route path="/business/:id" component={BusinessPage} />
          <Route
            exact
            path="/"
            render={props => <HomePage {...this.props} />}
          />
          <Route path="/signin" component={Signin} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/profile-business-list" component={ProfileBusinesList} />
          <Route path="/create-business" component={AddBusiness} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
