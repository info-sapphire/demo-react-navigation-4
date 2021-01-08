import * as FileSystem from "expo-file-system";

import { DB } from "../../db";
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";

export const loadPosts = () => {
  return async (dispatch) => {
    const posts = await DB.getPosts();

    dispatch({
      type: LOAD_POSTS,
      payload: posts,
    });
  };
};

export const toggleBooked = (post) => async (dispatch) => {
  console.log(post)
  await DB.updatePost(post);

  dispatch({
    type: TOGGLE_BOOKED,
    payload: post.id,
  });
};

export const removePost = (id) => async (dispatch) => {
  await DB.removePost(id);

  dispatch({
    type: REMOVE_POST,
    payload: id,
  });
};

export const addPost = (post) => async (dispatch) => {
  const fileName = post.image.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.image,
    });

    const payload = { ...post, image: newPath };
    const postId = await DB.createPost(payload);

    dispatch({
      type: ADD_POST,
      payload: { ...payload, id: postId },
    });
  } catch (error) {
    console.error(error);
  }
};
