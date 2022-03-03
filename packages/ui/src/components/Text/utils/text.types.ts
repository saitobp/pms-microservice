export interface ITextProps {
  component?: TTextComponent
  align?: TTextAlign
  className?: string
}
export type TTextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

export type TTextAlign = 'center' | 'end' | 'inherit' | 'justify' | 'left' | 'revert' | 'right' | 'start' | 'unset'
