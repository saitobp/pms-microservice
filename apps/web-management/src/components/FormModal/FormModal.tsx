import { FC } from 'react'
import { Button, Group, Modal, Stack } from '@mantine/core'

import { IFormModalProps } from './types/IFormModalProps'

const FormModal: FC<IFormModalProps> = (props) => {
  const { title, formId, children, width, onClose, onSubmit } = props

  return (
    <Modal title={title} onClose={onClose} centered opened closeOnClickOutside={false} size={width}>
      <form id={formId} onSubmit={onSubmit} noValidate>
        <Stack>
          <Stack spacing='xs'>{children}</Stack>

          <div>
            <Group position='right' spacing='xs'>
              <Button type='submit' form={formId} color='dark'>
                Salvar
              </Button>

              <Button variant='default' onClick={onClose}>
                Fechar
              </Button>
            </Group>
          </div>
        </Stack>
      </form>
    </Modal>
  )
}

export default FormModal
