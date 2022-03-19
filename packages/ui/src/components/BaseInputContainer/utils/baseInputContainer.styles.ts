import { createUseStyles } from 'react-jss'

export const useBaseInputContainerStyles = createUseStyles({
  container: {
    composes: ['relative', 'z-0', 'mb-6', 'w-full', 'group', 'my-2'],
  },
})
