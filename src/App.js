import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import IndexContainer from './containers/IndexContainer';
import FormContainer from './containers/FormContainer';

function App() {
  return (
    <div className="App">
     <Router>

{/*Navbar start Something to note is that navlink needs to be inside of router*/}
      <nav className="text-center bg-blue-900 text-yellow-100 p-4">
        <NavLink
          className="inline-block px-4 py-2"
          activeClassName="text-yellow-300"
          exact
          to="/"
        >
          Groups
        </NavLink>
        <NavLink
          className="inline-block px-4 py-2"
          activeClassName="text-yellow-300"
          exact
          to="/groups/new"
        >
          New Group
        </NavLink>
      </nav>
  {/*NavBar end*/}


  {/*Here are our routes and where we place our components */}
        <Switch>
        
          <Route exact path="/">
            <IndexContainer/>
          </Route>
        
        
          <Route path="/groups/new" component={FormContainer} />
          
          
        </Switch>
     </Router>
    </div>
  );
}

export default App;
