import { DependencyList, useEffect } from 'react';
import { usePreloadingContext } from '@/context/pre-loading';

export default function useEffectLoaded(callback: () => void, deps: DependencyList) {
  const { hasLoaded } = usePreloadingContext();

  useEffect(() => {
    if (!hasLoaded) {
      return;
    }

    callback();
  }, [...deps, hasLoaded]);
}
