import { usePostContext } from "../Context/PostContextProvider";

function Results({ posts }) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
