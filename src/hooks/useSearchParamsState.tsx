"use client";
import { safeJSONParse } from "@/utils/safe-json-parse";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type SetSearchParams<T> = (newValue: T) => void;

/**
 This hook will synchronize your state in your search params with the state in your component. Should work together with useSearchParamsState.
 Make sure that your `T` value is JSON serializable.
  ex..
  ```tsx
  const [selectedOption, setSelectedOption] = useSearchParamsState({
    defaultValue: defaultOption,
    key: "selectedAboutOption",
  });
  ```

  Gotchas:
  - Make sure that your `T` value is JSON serializable.
  - You cannot use Object identity to compare your values. You must use a deep comparison.
  EX:
  ```tsx
     // BAD 🔴
    const currentIndex = aboutSelectorOptions.findIndex(
      (option) => selectedOption === option // relying on object identity
    );

     // Good ✅ 
    const currentIndex = aboutSelectorOptions.findIndex(
      (option) => selectedOption?.to === option.to // relying on string
    );
  ```
 */
export const useSearchParamsState = <T,>({
  defaultValue,
  key,
}: {
  defaultValue: T;
  key: string;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const value = safeJSONParse<T>(searchParams.get(key));
  const has = searchParams.has(key);

  const setValue = (newValue: T) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(key, JSON.stringify(newValue));
    const newUrl = `${pathname}?${newSearchParams.toString()}`;
    router.push(newUrl);
  };

  return [
    has ? value : defaultValue,
    setValue satisfies SetSearchParams<T>,
  ] as const;
};
