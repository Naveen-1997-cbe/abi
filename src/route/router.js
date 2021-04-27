import React, { Component } from "react";
import { BrowserRouter, Switch ,Route} from "react-router-dom";
import history from "./history";
import ImageGallery from "../components/imageGallery";
import ImageGallery2 from "../components/imageGallery2";
class Router extends Component{
    render(){ 
        return(
            <BrowserRouter history={history}>
                <Switch>
                <Route path="/" component={ImageGallery} exact />
                <Route path="/nextPage" component={ImageGallery2} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;