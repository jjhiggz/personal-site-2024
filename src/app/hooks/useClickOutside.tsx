import type { MutableRefObject } from "react";
import { useEffect } from "react";

/**
  This hook is a utility for firing an event when clicking outside of an element. It's useful for closing dropdowns, modals etc.
  ex..
  ```tsx
  const myRef = useRef<HTMLDivElement>(null);
 
  useClickOutside(
    myRef,
    () => {
      myCloseFunction()
    },
    {propagates: false,}
  );
  ```
 */
const useClickOutside = (
  ref: MutableRefObject<any>,
  handler: (e: MouseEvent) => void,
  options?: {
    // controls whether or not when you click outside of the ref, will the event propagate
    // if it propagates whatever you click on outside of the ref will also be triggered
    propagates?: boolean;
  }
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      if (ref.current.contains(e.target as Element)) {
        return;
      }

      e.preventDefault();
      if (!options?.propagates) {
        e.preventDefault();
        e.stopPropagation();
      }
      handler(e);
    };

    document.addEventListener("click", handleClick, true);
    // if they right click outside
    document.addEventListener("contextmenu", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleClick);
    };
  }, [handler, options?.propagates, ref]);
};

export default useClickOutside;
