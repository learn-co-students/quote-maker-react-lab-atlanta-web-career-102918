import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  /*
    TODO:
    Render Quotes With QuoteCard component and pass down callback
    props for removing, upvoting and downvoting quotes
   */
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
  return {
    authors: state.authors,
    quotes: state.quotes,
    id: state.id
  }
}

export default connect(mapStateToProps)(Quotes);
