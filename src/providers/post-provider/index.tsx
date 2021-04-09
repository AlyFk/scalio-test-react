import React, { ReactNode, useState } from "react";
import { Post } from "types";

interface PostContextState {
  postData: Post | null;
  setPostData: (data: Post) => void;
}

export const PostContext = React.createContext<PostContextState>({
  postData: null,
  setPostData: (data: Post) => {},
});

interface PostContextProviderprops {
  children: ReactNode;
}

export const PostContextProvider: React.FC<PostContextProviderprops> = ({
  children,
}) => {
  const [data, setData] = useState<Post | null>(null);
  const setPostData = (newPost: Post) => {
    setData(newPost);
  };
  return (
    <PostContext.Provider value={{ postData: data, setPostData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
