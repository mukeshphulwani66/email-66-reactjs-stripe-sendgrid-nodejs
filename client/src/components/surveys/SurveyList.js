import React , {Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchSurveys();
    }
    renderSurveys(){
      return this.props.surveys.reverse().map(survey =>{
          return (
              <div className="card #00000094" key={survey._id} style={{backgroundColor:'#0d091685'}}>
               <div className="card-content white-text">
                 <span className="card-title">{survey.title}</span>
                 <p>{survey.body}</p>
                 <p className="right">
                 Sent On:{new Date(survey.dateSent).toLocaleDateString()}
                 </p>
               </div>
               <div className="card-action">
                <a>Yes :{survey.yes}</a>
                <a>No :{survey.no}</a>
               </div>
              </div>
          );
      })
    }
    render(){
        return (
        <div>
           {this.renderSurveys()}
        </div> 
        );
    }
}

function mapStateToProps(state){
    return {surveys:state.surveys};
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);