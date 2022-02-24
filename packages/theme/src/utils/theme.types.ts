export interface ITheme {
  pallete: IColor
  spacing: ISpacing
  semanticColors: ISemanticColors
}

interface IColor {
  white: string
  lightGray: string
  gray: string
  black: string
}

interface ISpacing {
  tiny: string
  small: string
  medium: string
  large: string
}

interface ISemanticColors {
  overlayBackground: string
}
