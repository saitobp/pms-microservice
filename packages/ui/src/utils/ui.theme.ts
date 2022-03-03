import { CSSProperties } from 'react'

export const uiTheme = {
  pallete: {
    white: '#ffffff',
    lightGray: '#e9ecef',
    gray: '#6c757d',
    black: '#212529',
  },

  spacing: {
    tiny: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
  },

  semanticColors: {
    overlayBackground: 'rgba(0, 0, 0, 0.25)',
  },

  typography: {
    h1: {
      fontFamily: 'montserrat',
      fontWeight: 'normal',
      fontSize: '2.25rem',
    } as CSSProperties,
    h2: {
      fontFamily: 'montserrat',
      fontWeight: 'normal',
      fontSize: '2rem',
    } as CSSProperties,
    h3: {
      fontFamily: 'montserrat',
      fontWeight: 'normal',
      fontSize: '1.75rem',
    } as CSSProperties,
    h4: {
      fontFamily: 'montserrat',
      fontWeight: 'normal',
      fontSize: '1.50rem',
    } as CSSProperties,
    p: {
      fontFamily: 'montserrat',
      fontWeight: 'normal',
      fontSize: '1rem',
    } as CSSProperties,
  },
}
