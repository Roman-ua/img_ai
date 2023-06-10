import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http/api.ts";
import {PATH} from "../../constants/path.ts";
import {IAllPostsResponse} from "../../types/interfaces.ts";

const getAllPosts = async () => {
  try {
    const { data }: IAllPostsResponse = await api.get(PATH.SHARE_IMG);

    if (data?.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

const getPostsList = createAsyncThunk(
  'users/getAllPosts',
  async () => {
    return await getAllPosts();
  }
)

export default getPostsList;
