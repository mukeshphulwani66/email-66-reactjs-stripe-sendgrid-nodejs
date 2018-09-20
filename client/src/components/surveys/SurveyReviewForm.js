// SurveyFormReview shows users there form inputs for review

import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import formFields from './formFields';
import { withRouter} from 'react-router-dom';
import * as actions from '../../actions'; 

const SurveyFormReview = ({onCancel,formValues,submitSurvey,history})=>{
  
    const reviewFields = _.map(formFields,field=>{
        return (
            <div key={field.name} style={{fontSize:'20px'}}>
             <label>{field.label}</label>
             <div>
             {formValues[field.name]}
             </div>
            </div>
        );
    })

    return (
        <div>
         <h5>please confirm your entries</h5>
         <div>
            {reviewFields}
         </div>
          <button 
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
          >
          Back
          </button>
          <button 
          onClick={() => submitSurvey(formValues,history)}
          className="green btn-flat right white-text">
            Send Survey
            <i className="material-icons right">email</i>
          </button>
        </div>
    );
};

function mapStateToProps(state){
    return {
      formValues:state.form.surveyForm.values
    };
}

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));
