import React ,{Component} from 'react';
import { BrowserRouter,Route} from 'react-router-dom';

import {connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';



class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
    return(
     <div style={{height:'100vh',background:'linear-gradient(to right, rgba(132, 0, 255, 0.73), #ffffff)',backgroundColor:'white' }}>
         <BrowserRouter>
             <div>
                <Header/>
                <Route exact path="/" component={Landing} /> 
                <Route exact path="/surveys" component={Dashboard} /> 
                <Route path="/surveys/new" component={SurveyNew} /> 
             </div>
         </BrowserRouter>
     </div>
    );
   }
}

export default connect(null,actions)(App);