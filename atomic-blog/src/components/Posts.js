import { usePostContext } from "../Context/PostContextProvider";
import { useSearchQueryContext } from "../Context/PostContextProvider";
import List from "./List";
function Posts() {
  const { posts } = usePostContext();
  const { searchQuery } = useSearchQueryContext();
  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;
  return (
    <section>
      <List posts={searchedPosts} />
    </section>
  );
}

export default Posts;
