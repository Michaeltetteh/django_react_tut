import React, {Component} from "react";
import {Switch,Route,Link} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";

class App extends Component {
    render() {
        return ( 
            <div className = "site" >
                <nav>
                    <Link className={"nav-link"} to={"/"}>
                        Home
                    </Link>
                    <Link className={"nav-link"} to={"/login/"}>
                        Login
                    </Link>
                    <Link className={"nav-link"} to={"/signup/"}>
                        Signup
                    </Link>
                </nav>
                <main>
                    <h1 > You have no power here!.</h1> 
                    <Switch>
                        <Route exact path={"/login/"} component={Login}/>
                        <Route exact path={'/signup/'} component={Signup}/>
                        <Route exact path={"/"} render={() => <div> Home Again</div>}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;