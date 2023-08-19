import { useSearchQueryContext } from "../Context/PostContextProvider";

function SearchPosts() {
  const { searchQuery, handleSearchQuery } = useSearchQueryContext();
  return (
    <input
      value={searchQuery}
      onChange={handleSearchQuery}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
