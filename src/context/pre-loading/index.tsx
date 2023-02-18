import { createContext, useContext, useState, useMemo } from 'react';
import Preloading from '@/context/pre-loading/layout';
import WithChildren from '@/@types/with-children';
import PreloadingContextProps from './props';

const DEFAULT_STATE: PreloadingContextProps = {
  hasLoaded: false
};

const PreloadingContext = createContext<PreloadingContextProps>(DEFAULT_STATE);

export function PreloadingContextProvider({ children }: WithChildren) {
  const [hasLoaded, setLoaded] = useState(false);

  return useMemo(
    () => (
      <PreloadingContext.Provider value={{ hasLoaded }}>
        <Preloading setLoaded={() => setLoaded(true)} />
        {children}
      </PreloadingContext.Provider>
    ),
    [hasLoaded]
  );
}

export const usePreloadingContext = () => useContext(PreloadingContext);
