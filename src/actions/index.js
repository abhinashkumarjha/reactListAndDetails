import axios from "axios";

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
    const url = `${ROOT_URL}/posts/${id}`;
    const request = axios.get(url);
    return {
      type: FETCH_A_POST,
      payload: request
    };
  }