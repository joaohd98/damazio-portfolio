import useStateRef from '@/hooks/useStateRef';

const useStateMultiObj = <T>(intialState: T) => {
  const [state, setState, stateRef] = useStateRef<T>(intialState);

  const onChangePartial = (partial: Partial<T>) => {
    setState({ ...state, ...partial });
  };

  const restoreInitialState = () => {
    setState(intialState);
  };

  return [state, onChangePartial, stateRef, restoreInitialState] as const;
};

export default useStateMultiObj;
