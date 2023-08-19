import { useState, useEffect } from "react";

function useToggleDarkMode() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  const toggleDarkMode = () => {
    setIsFakeDark((v) => !v);
  };
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return [isFakeDark, toggleDarkMode];
}

export default useToggleDarkMode;
