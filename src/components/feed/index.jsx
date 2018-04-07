import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

class Feed extends Component {
  static defaultProps = {
    className: ''
  };

  static propTypes = {
    className: PropTypes.string
  };

  state = {
    feed: []
  };

  componentWillMount() {
    this.getFeed();
  }

  getFeed = async () => {
    const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const json = await res.json();
    this.setState(({ feed }) => ({ feed: feed.concat(...json) }));
  };

  render() {
    return (
      <div className={`feed ${this.props.className}`}>
        <div style={{ height: '100vh', overflowY: 'scrollable' }}>
          {this.state.feed.map(item => <p key={`${item}-thing`}>{item}</p>)}
        </div>
      </div>
    );
  }
}

export default Feed;
