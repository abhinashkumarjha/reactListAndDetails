import axios from "axios";
// the base url
const ROOT_URL = `https://jsonplaceholder.typicode.com`;

// all the action creators.
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_A_POST = "FETCH_A_POST"

// all the actions.

export function fetchAllPosts() {
  const url = `${ROOT_URL}/posts`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
    console.warn(`APP REQUEST WARNING - jsonplaceholder really donot have any other post other than 1. So converting the id to 1 instead of`,{id})
    const url = `${ROOT_URL}/posts/1`;
    const request = axios.get(url);
    return {
      type: FETCH_A_POST,
      payload: request
    };
  }