import { useContext, useState } from "react";
import { AxiosError } from "axios";
import { getPostById } from "gate";
import PostContext from "providers/post-provider";

export const usePost = () => {
  const { postData, setPostData } = useContext(PostContext);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const searchPostById = async (id: number) => {
    setLoading(true);
    try {
      const data = await getPostById(id);
      await setPostData(data);
    } catch (error) {
      setError((error as AxiosError).response?.data.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { searchPostById, post: postData, error, loading };
};

