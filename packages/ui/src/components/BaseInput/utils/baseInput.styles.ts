import { createUseStyles } from 'react-jss'

export const useBaseInputStyles = createUseStyles({
  input: {
    composes: [
      'block',
      'py-2.5',
      'px-0',
      'w-full',
      'text-sm',
      'text-gray-900',
      'bg-transparent',
      'border-0',
      'border-b-2',
      'border-gray-300',
      'appearance-none',
      'focus:outline-none',
      'focus:ring-0',
      'focus:border-slate-900',
      'peer',
    ],
  },
})
