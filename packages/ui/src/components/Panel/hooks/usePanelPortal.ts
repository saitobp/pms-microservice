import { useEffect } from 'react'

export const usePanelPortal = () => {
  const modal = document.createElement('div')
  const body = document.getElementsByTagName('body')[0]

  modal.setAttribute('id', 'modal-portal')

  useEffect(() => {
    body.appendChild(modal)

    return () => {
      body.removeChild(modal)
    }
  })

  return { modal }
}
