import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { usePostContext } from "../Context/PostContextProvider";
function Header() {
  const { posts, handleClearPosts } = usePostContext();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
export default Header;
