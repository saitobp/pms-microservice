import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button from './Button'
import { IButtonProps } from './utils/button.types'

export default {
  title: 'Basic Theme/Inputs/Button',
  component: Button,
  decorators: [
    Story => (
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<IButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}

export const Default = Template.bind({})
