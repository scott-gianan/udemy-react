import { useState } from "react";

function useHandleLoader(fetchingState = false) {
  const [error, setError] = useState();
  const [isFetchingData, setIsFetchingData] = useState(fetchingState);

  return [error, setError, isFetchingData, setIsFetchingData];
}

export default useHandleLoader;
