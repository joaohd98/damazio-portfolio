import {
  aspectRatioBase, AspectRatioProps, ViewportBaseProps, viewportsBase,
} from '@/styles/viewport-base';
import interpolation from '@/utils/media-query/interpolation';

export const viewPortOrPx = (value: ViewportBaseProps | number) => {
  if (typeof value === 'number') {
    return value;
  }

  return viewportsBase[value].width;
};

export const mediaMinWidth = <Props>(value: ViewportBaseProps | number, plus = 0) => interpolation<Props>(`(min-width: ${viewPortOrPx(value) + plus}px)`);
export const mediaMaxWidth = <Props>(value: ViewportBaseProps | number, plus = 0) => interpolation<Props>(`(max-width: ${viewPortOrPx(value) + plus}px)`);

export const mediaBetween = <Props>(
  valueMin: ViewportBaseProps | number,
  valueMax: ViewportBaseProps | number,
  plusMin = 0,
  plusMax = 0,
) => interpolation<Props>(
    `(min-width: ${viewPortOrPx(valueMin) + plusMin}px) and (max-width: ${viewPortOrPx(valueMax) + plusMax}px)`,
  );

export const mediaOrientation = (orientation: 'portrait' | 'landscape') => interpolation(`(orientation: ${orientation})`);
export const mediaMinAspectRatio = (key: AspectRatioProps) => interpolation(`(min-aspect-ratio: ${aspectRatioBase[key]})`);
