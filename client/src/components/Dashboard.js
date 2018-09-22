import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
const Dashboard = ()=>{
    return(
        <div className="container">
         <SurveyList />
        <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red waves-effect waves-light" href="#">
        <i className="large material-icons">add</i>
        </Link>
        </div>
        </div>
    )
}

export default Dashboard;