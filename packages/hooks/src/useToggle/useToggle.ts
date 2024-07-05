import { useCallback, useState } from 'react';

export function useToggle(init = false): [boolean, () => void] {
  const [toggle, setToggle] = useState(init);

  const toggleIt = useCallback(() => setToggle(!toggle), [toggle]);

  return [toggle, toggleIt];
}
