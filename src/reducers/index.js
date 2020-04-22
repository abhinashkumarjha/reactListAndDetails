import { combineReducers } from 'redux';
import PostReducer from './../reducers/postReducer';
import PostDetailReducer from './../reducers/postDetailReducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  postDetails: PostDetailReducer
});

export default rootReducer;
