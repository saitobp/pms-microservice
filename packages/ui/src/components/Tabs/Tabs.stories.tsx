import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tabs, ITabsProps, TabItem } from '.'
import { Text } from '../../index'

export default {
  title: 'Layout/Tabs',
  component: Tabs,
} as Meta

const Template: Story<ITabsProps> = args => (
  <Tabs {...args}>
    <TabItem tabName='Tab 1'>
      <Text>Hello from tab 1</Text>
    </TabItem>

    <TabItem tabName='Tab 2'>
      <Text>Hello from tab 2</Text>
    </TabItem>
  </Tabs>
)

export const Default = Template.bind({})
