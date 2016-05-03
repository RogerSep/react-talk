import React from 'react';
import styles from './Repo.scss';

export default class Repo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { repo } = this.props;

    return (
      <div className={styles.repo}>
        <h3><a href={repo.html_url}>{repo.name}</a></h3>
        <p>{repo.description}</p>
      </div>
    );
  }
}
