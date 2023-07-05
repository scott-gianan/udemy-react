import { useState } from "react";

function useToggle(state = true) {
  const [open, setOpen] = useState(state);
  const handleToggle = () => {
    setOpen((o) => !o);
  };
  return [open, handleToggle];
}

export default useToggle;
