import {
  ThemedStyledProps,
  InterpolationValue,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  DefaultTheme,
  css,
  SimpleInterpolation,
} from 'styled-components';
import { StaticImageData } from 'next/image';

type InterpolationFunction<Props> = (
  props: ThemedStyledProps<Props, DefaultTheme>
) => InterpolationValue | FlattenInterpolation<ThemedStyledProps<Props, DefaultTheme>>;

type GeneratorFunction<Props> = (
  strings: TemplateStringsArray,
  ...interpolations: (
    | InterpolationValue
    | InterpolationFunction<Props>
    | FlattenInterpolation<ThemedStyledProps<Props, DefaultTheme>>
    | StaticImageData
  )[]
) => FlattenSimpleInterpolation;

export default <Props>(rule: string): GeneratorFunction<Props> => (template, ...interpolation) => css`
      @media ${rule} {
        ${css(template, ...(interpolation as SimpleInterpolation[]))}
      }
    `;
