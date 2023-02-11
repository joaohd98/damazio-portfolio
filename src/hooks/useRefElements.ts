import { useRef } from 'react';

export default function useRefElements<Type>(initial: Type[] = []) {
  const ref = useRef<(Type | null)[]>(initial);

  const setRef =
    (index = 0) =>
    (element: Type | null) => {
      ref.current[index] = element;
    };

  return [ref, setRef] as const;
}
