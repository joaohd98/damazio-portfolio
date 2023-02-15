import { useState } from 'react';

const useStateMultiObj = <T>(
  intialState: T
): [T, (index: keyof T, value: T[keyof T], removeOthers?: boolean) => void, (partial: Partial<T>) => void] => {
  const [state, setState] = useState<T>(intialState);

  return [
    state,
    (index, value, removeOthers) => {
      if (removeOthers) {
        setState({ ...intialState, [index]: value });
        return;
      }

      setState({ ...state, [index]: value });
    },
    partial => {
      setState({ ...state, ...partial });
    }
  ];
};

export default useStateMultiObj;
