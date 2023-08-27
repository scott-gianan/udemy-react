import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { usePostContext } from "../Context/PostContextProvider";
import { useCallback } from "react";
function Header() {
  const { posts, handleClearPosts } = usePostContext();
  const clearPost = useCallback(() => {
    handleClearPosts();
  }, [handleClearPosts]);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts />
        <button onClick={clearPost}>Clear posts</button>
      </div>
    </header>
  );
}
export default Header;
