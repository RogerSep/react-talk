import { FETCH_USER, FETCH_REPOS } from '../actions/github';

const user = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return [
        action.data,
        ...state.filter(user => user.id !== action.data.id)
      ];
      break;
    default:
      return state;
      break;
  }
}

const repos = (state = [], action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return state
        .filter(repo => repo.user.id !== action.user.id)
        .concat({
          user: { id: action.user.id },
          repos: action.data
        });
      break;
    default:
      return state;
      break;
  }
}

export { repos, user };
