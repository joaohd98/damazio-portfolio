import { useRef } from 'react';
import gsap from 'gsap';
import PongOptions from './props';

export default function (setOptionsPartial: (partial: Partial<PongOptions>) => void) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onChangeOption = (partial: Partial<PongOptions>, withoutAnimation?: boolean) => {
    if (withoutAnimation) {
      setOptionsPartial(partial);
      return;
    }

    const tl = gsap.timeline();

    tl.to(wrapperRef.current, { opacity: 0, duration: 0.2 });
    tl.call(() => setOptionsPartial(partial));
    tl.to(wrapperRef.current, { opacity: 1, duration: 0.2 });
  };

  return {
    wrapperRef,
    onChangeOption
  };
}
