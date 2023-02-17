import { DependencyList, useEffect } from 'react';

export default function useEffectResizeScreen(callback: () => void, deps: DependencyList, shouldCallWhenEnter = false) {
  useEffect(() => {
    if (shouldCallWhenEnter) {
      callback();
    }
  }, []);

  useEffect(() => {
    window.removeEventListener('resize', callback);
    window.addEventListener('resize', callback);

    return () => {
      window.removeEventListener('resize', callback);
    };
  }, [...deps]);
}
