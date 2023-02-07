import { MutableRefObject, useRef } from 'react';

type Response<Type> = [MutableRefObject<(Type | null)[]>, (index?: number) => (element: Type | null) => void];

export default function useRefElements<Type>(initial: Type[] = []): Response<Type> {
  const ref = useRef<(Type | null)[]>(initial);

  const setRef =
    (index = 0) =>
    (element: Type | null) => {
      ref.current[index] = element;
    };

  return [ref, setRef];
}
