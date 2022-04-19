import { LoadingOverlay } from '@mantine/core'
import { FC, Suspense } from 'react'

const SuspenseRouteElement: FC = props => {
  const { children } = props

  return <Suspense fallback={<LoadingOverlay visible />}>{children}</Suspense>
}

export default SuspenseRouteElement
