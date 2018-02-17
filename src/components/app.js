import React,{Component} from 'react';
import {Router,Route,Switch,NavLink} from 'react-router-dom';
import Home from './home';
import createBrowserHistory from 'history/createBrowserHistory';	
import ViewQuotes from './viewQuotes';
import UpdateQuotes from './updateQuotes';

const history = createBrowserHistory();

const Links = () => (
    <ul id="routes">
        <li><NavLink exact to="/" activeClassName="current">Home</NavLink></li>
        <li><NavLink to="/viewquotes" activeClassName="current">ViewQuotes</NavLink></li>
        <li><NavLink to="/updatequotes" activeClassName="current">UpdateQuotes</NavLink></li>
    </ul>
);

const app = () => (

	<Router history={history}>
		<div>
			<Links />
			<div id="content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/viewquotes" component={ViewQuotes} />
					<Route path="/updatequotes" component={UpdateQuotes} />
				</Switch>
			</div>
		</div>
	</Router>
);

export default app;