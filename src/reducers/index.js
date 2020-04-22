import { combineReducers } from 'redux';
import PostReducer from './../reducers/postReducer';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
