import React from 'react';
import { connect } from 'react-redux';
import styles from './App.scss'
import { fetchUser } from '../actions/github';
import User from './User'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchUser = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      this.props.dispatch(fetchUser(e.target.value));
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.controls}>
          <input type="text" onKeyPress={this.fetchUser} />
        </div>
        <div className={styles.mainGrid}>
          {this.props.data.users.map((user) => (
            <User
              key={user.id}
              { ...this.props }
              user={user}
              repos={this.props.data.repos.filter(repo => user.id === repo.user.id).reduce((a, b) => a.concat(b.repos), [])} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({data: state}))(App);
