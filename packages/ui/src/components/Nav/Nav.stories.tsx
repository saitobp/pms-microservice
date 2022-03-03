import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MdSpaceDashboard } from 'react-icons/md'

import Nav from './Nav'
import { INavProps } from './utils/nav.types'

export default {
  title: 'Navigation/Nav',
  component: Nav,
} as Meta

const Template: Story<INavProps> = args => <Nav {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'My Aweasome App',
  items: [
    { name: 'Dashboard', path: '/dashboard', icon: MdSpaceDashboard },
    { name: 'Dashboard', path: '/dashboard', icon: MdSpaceDashboard },
    { name: 'Dashboard', path: '/dashboard', icon: MdSpaceDashboard },
  ],
}
