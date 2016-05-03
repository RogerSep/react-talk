import React from 'react';
import styles from './User.scss';
import { fetchRepos } from '../actions/github';
import Repo from './Repo';

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.dispatch(fetchRepos(this.props.user));
  }

  render() {
    const { user, repos } = this.props;

    return (
      <div className={styles.user}>
        <div>
          <img src={user.avatar_url} />
          <span>{user.name}</span>
        </div>
        <div className={styles.repo}>
          {repos.map(repo => {
            return (
              <Repo key={repo.id} { ...this.props } repo={repo} />
            )
          })}
        </div>
      </div>
    );
  }
}
