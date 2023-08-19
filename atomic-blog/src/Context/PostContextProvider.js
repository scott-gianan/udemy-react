import React from "react";
import { useState, useContext } from "react";
import { faker } from "@faker-js/faker";
const PostContext = React.createContext();
const QueryContext = React.createContext();
export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const postValue = {
    posts,
    setPosts,
  };
  const queryValue = {
    searchQuery,
    setSearchQuery,
  };
  return (
    <QueryContext.Provider value={queryValue}>
      <PostContext.Provider value={postValue}>{children}</PostContext.Provider>
    </QueryContext.Provider>
  );
}

export function usePostContext() {
  const { posts, setPosts } = useContext(PostContext);
  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  return {
    posts,
    handleAddPost,
    handleClearPosts,
  };
}
export function useSearchQueryContext() {
  const { searchQuery, setSearchQuery } = useContext(QueryContext);
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  return {
    searchQuery,
    handleSearchQuery,
  };
}
export default PostContextProvider;
