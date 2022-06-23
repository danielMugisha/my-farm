import React from "react";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
import Welcome from "./components/welcome/Welcome";
import GeneralInfo from "./components/generalInfo/GeneralInfo";
import Check from "./components/check/Check";
const App = () => {
	return (
		<div className="app">
			<Router>
				<NavBar />
				<div className="flex-grow-1 d-flex justify-content-center align-items-center">
					<Switch>
						<Route path="/home" exact component={Home} />
						<Route path="/" exact component={Welcome} />
						<Route path="/general" component={GeneralInfo} />
						<Route path="/check" component={Check}></Route>
						<Route path="/auth" component={Auth}></Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
};
export default App;
