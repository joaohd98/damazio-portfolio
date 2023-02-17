import { useState } from 'react';
import useEffectResizeScreen from '@/hooks/useEffectResizeScreen';
import { viewportsBase } from '@/styles/viewport-base';
import gsap from 'gsap';
import useEffectOnlyChanges from '@/hooks/useEffectOnlyChanges';
import * as S from './styles';
import useAnimation from './animation';
import drops from './drops';
import assets from './assets';

type Status = 'none' | 'loading' | 'success';

export default function Preloading() {
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

    changeVisibility(false);
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
    const changeLoaded = () => {
      quantity += 1;
      const percentage = gsap.utils.mapRange(0, assetsSize, 0, 100, quantity).toFixed(0);
      setPercentage(percentage);
    };

    document.fonts.ready.then(changeLoaded);
    mixAsseets.forEach(asset => {
      const img = new Image();
      img.src = asset;

      img.onload = () => {
        changeLoaded();
      };

      if (img.complete) {
        changeLoaded();
      }
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