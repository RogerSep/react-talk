import fetch from 'isomorphic-fetch';
import { loading } from './index';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = user => dispatch => {
  dispatch(loading());

  return fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: FETCH_USER,
      user: user,
      data: json
    }));

}

export const FETCH_REPOS = 'FETCH_REPOS';
export const fetchRepos = user => dispatch => {

  return fetch(`${user.repos_url}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: FETCH_REPOS,
      user: user,
      data: json
    }));

}
