import { useState } from 'react';
import useEffectResizeScreen from '@/hooks/useEffectResizeScreen';
import { viewportsBase } from '@/styles/viewport-base';
import gsap from 'gsap';
import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import * as S from 'src/context/pre-loading/layout/styles';
import useAnimation from 'src/context/pre-loading/layout/animation';
import drops from 'src/context/pre-loading/layout/drops';
import assets from 'src/context/pre-loading/layout/assets';
import PreloadingProps from './props';

type Status = 'none' | 'loading' | 'success';

export default function Preloading({ setLoaded }: PreloadingProps) {
  const { changeVisibility, containerRef, setRainsRef } = useAnimation(drops.length);

  const [percentageMobile, setPercentageMobile] = useState('0');
  const [mobileStatus, setMobileStatus] = useState<Status>('none');

  const [percentageDesktop, setPercentageDesktop] = useState('0');
  const [desktopStatus, setDesktopStatus] = useState<Status>('none');

  useEffectOnlyChanges(() => {
    if (mobileStatus === 'loading' || desktopStatus === 'loading') {
      changeVisibility(true);
      return;
    }

    changeVisibility(false, setLoaded);
  }, [desktopStatus, mobileStatus]);

  useEffectResizeScreen(
    () => {
      const isMobile = window.innerWidth <= viewportsBase.mobile.width;

      const status = isMobile ? mobileStatus : desktopStatus;
      const resolutionsAssets = isMobile ? assets.mobile : assets.desktop;
      const setStatus = isMobile ? setMobileStatus : setDesktopStatus;
      const setPercentage = isMobile ? setPercentageMobile : setPercentageDesktop;

      if (status === 'none') {
        setStatus('loading');
        startLoad(resolutionsAssets, percentage => {
          setPercentage(percentage);

          if (percentage === '100') {
            setStatus('success');
          }
        });
      }
    },
    [desktopStatus, mobileStatus],
    true
  );

  const startLoad = (resolutionsAssets: string[], setPercentage: (value: string) => void) => {
    const mixAsseets = [...resolutionsAssets, ...assets.commmon];
    const assetsSize = mixAsseets.length + 1;

    let quantity = 0;
    const hasLoaded = (image?: HTMLImageElement) => {
      quantity += 1;
      const percentage = gsap.utils.mapRange(0, assetsSize, 0, 100, quantity).toFixed(0);
      setPercentage(percentage);

      if (image) {
        document.body.removeChild(image);
      }
    };

    document.fonts.ready.then(() => hasLoaded());
    mixAsseets.forEach(asset => {
      const image = new Image();
      image.onload = () => {
        hasLoaded(image);
      };

      image.src = asset;
      image.hidden = true;

      document.body.appendChild(image);
    });
  };

  return (
    <S.Preloading ref={containerRef}>
      <S.RainZone>
        {drops.map((deg, index) => (
          <S.RainContainer key={deg} deg={deg} ref={setRainsRef(index)}>
            <S.RainPuddle />
            <S.RainDrop />
            <S.RainDropReflection />
          </S.RainContainer>
        ))}
      </S.RainZone>
      <S.IndicatorTextMobile>{percentageMobile}%</S.IndicatorTextMobile>
      <S.IndicatorTextDesktop>{percentageDesktop}%</S.IndicatorTextDesktop>
    </S.Preloading>
  );
}
