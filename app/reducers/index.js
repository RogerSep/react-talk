import { LOADING } from '../actions';

export const loading = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
      break;
    default:
      return state;
      break;
  }
}
