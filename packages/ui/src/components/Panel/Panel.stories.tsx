import React from 'react'
import { Story, Meta } from '@storybook/react'

import Panel from './Panel'
import { IPanelProps } from './utils/panel.types'

export default {
  title: 'Layout/Panel',
  component: Panel,
} as Meta

const Template: Story<IPanelProps> = args => <Panel {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  title: 'My Awesome Panel',
}
