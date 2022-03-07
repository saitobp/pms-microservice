import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, IButtonProps } from './index'

export default {
  title: 'Inputs/Button',
  component: Button,
  decorators: [
    Story => (
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
  },
} as Meta<IButtonProps>

const Template: Story<IButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}

export const Default = Template.bind({})

/* Temporary name */
export const Variant2 = Template.bind({})
Variant2.args = {
  variant: 'tab',
}
