import type { KeyboardEvent } from "react";
import { useCallback, useEffect } from "react";

type ValidKey = "Escape" | "Enter" | "Tab" | "Shift" | "j" | "k";
type ModifierKeys = "metaKey" | "ctrlKey" | "altKey";

type UseKeyProps = {
  onKey: "up" | "down" | "press";
  keys: ValidKey[];
  // any of the following modifier keys will make the event trigger
  modifierKeys?: ModifierKeys[];
  handler: () => void;
  activeWhen: boolean;
};

const getKeyEvent = (
  onKey: "up" | "down" | "press"
): "keydown" | "keyup" | "keypress" => `key${onKey}`;

/**
useKeyListener lets us attatch a key listener to the dom as a component mounts, and detatch it when it unmounts. 

eg...

```tsx
  useKeyListener({
    onKey: "up",
    keys: ["Escape"],
    activeWhen: showModal,
    handler: () => {
        closeModal();
    },
  });
```
*/
const useKeyListener = ({
  onKey,
  keys,
  handler,
  activeWhen,
  modifierKeys,
}: UseKeyProps) => {
  const eventListener = useCallback(
    (e: KeyboardEvent) => {
      // console.log({ keys, key: e.key });
      if (keys.includes(e.key as ValidKey)) {
        if (!modifierKeys?.length) {
          handler();
        } else {
          const isModifierActive = modifierKeys.some(
            (modifierKey) => e[modifierKey]
          );
          if (isModifierActive) {
            handler();
          }
        }
      }
    },
    [handler, keys, modifierKeys]
  );

  useEffect(() => {
    if (activeWhen) {
      document.addEventListener(
        getKeyEvent(onKey),
        eventListener as any as EventListener
      );
    }
    if (!activeWhen) {
      document.removeEventListener(getKeyEvent(onKey), eventListener as any);
    }
    return () => {
      document.removeEventListener(getKeyEvent(onKey), eventListener as any);
    };
  }, [eventListener, activeWhen, onKey]);
};

export default useKeyListener;
