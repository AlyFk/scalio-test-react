import { Post } from "types";
import api from "./config";

export const getPostById = async (id: number): Promise<Post> =>
  await (await api.get(`posts/${id}`)).data;
