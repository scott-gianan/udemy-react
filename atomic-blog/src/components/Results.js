import React from "react";
function Results({ posts }) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default React.memo(Results);
