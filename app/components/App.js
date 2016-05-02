import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        {this.props.data.grid.elements.map((e, i) => (
          <div key={i}>
            <h3>{e.title}</h3>
            <div>{e.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({data: state}))(App);
