import React ,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
   render(){
       return (
           <StripeCheckout
           name="Email-66"
           description="$5 for 5 emails" 
           amount={500}
           token={token => this.props.handleToken(token)}
           stripeKey= {process.env.REACT_APP_STRIPE_KEY} >
           <button type="submit" className="btn red lighten-2 waves-effect waves-light">Add credits</button>
           </StripeCheckout>
       );
   }
}


export default connect(null,actions)(Payments);