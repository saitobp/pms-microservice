import { FC } from 'react'
import { css } from '@emotion/react'

import { IInputProps } from './utils/input.types'

import { spacing } from '../../theme/spacing'
import { typography } from '../../theme/typography'
import { colors } from '../../theme/colors'
import { timing } from '../../theme/timing'

const useStyles = () => {
  const styles = {
    container: css({
      position: 'relative',
      zIndex: 0,
      marginBottom: spacing[6],
      marginTop: spacing[4],
      width: '100%',
    }),

    input: css({
      display: 'block',
      padding: `${spacing[2.5]} 0`,
      width: '100%',
      ...typography.textSm,
      color: colors.gray900,
      backgroundColor: 'transparent',
      borderWidth: '0',
      borderBottomWidth: '2px',
      borderColor: colors.gray300,
      appearance: 'none',

      '&:focus': {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        borderColor: colors.gray900,
      },
    }),

    label: css({
      position: 'absolute',
      ...typography.textSm,
      color: colors.gray500,
      transitionDuration: timing.duration300,
      transform: 'translate(0, -1.5rem) scale(.75)',
      zIndex: '-10',
      transformOrigin: 0,
      top: 3,
    }),
  }

  return { styles }
}

const Input: FC<IInputProps> = props => {
  const { label } = props

  const { styles } = useStyles()

  return (
    <div css={styles.container}>
      <input type='text' css={styles.input} placeholder=' ' />

      <label
        css={styles.label}
        className={`peer-focus:left-0 peer-focus:text-blue-600
                  peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                  peer-focus:-translate-y-6`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
