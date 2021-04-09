import React from "react";
import { PostContextProvider } from "providers/post-provider";
import Pages from "pages";
import "styles.scss";

function App() {
  return (
    <PostContextProvider>
      <Pages />
    </PostContextProvider>
  );
}

export default App;
