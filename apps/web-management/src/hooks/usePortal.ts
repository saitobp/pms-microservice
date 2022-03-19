import { useEffect } from 'react'

export const usePortal = (id: string) => {
  const portal = document.createElement('div')
  const body = document.getElementsByTagName('body')[0]

  portal.setAttribute('id', id)

  useEffect(() => {
    body.appendChild(portal)

    return () => {
      body.removeChild(portal)
    }
  })

  return { portal }
}
