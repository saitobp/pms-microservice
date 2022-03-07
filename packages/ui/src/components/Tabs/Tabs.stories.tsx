import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tabs, ITabsProps, TabItem } from '.'

export default {
  title: 'Layout/Tabs',
  component: Tabs,
} as Meta

const Template: Story<ITabsProps> = args => (
  <Tabs {...args}>
    <TabItem tabName='Teste'>
      <div>Hi</div>
    </TabItem>

    <TabItem tabName='Teste2'>
      <div>Hi 2</div>
    </TabItem>
  </Tabs>
)

export const Default = Template.bind({})
