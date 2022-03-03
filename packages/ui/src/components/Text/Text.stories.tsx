import React from 'react'
import { Story, Meta } from '@storybook/react'

import Text from './Text'
import { ITextProps } from './utils/text.types'

export default {
  title: 'Display/Text',
  component: Text,
} as Meta

const Template: Story<ITextProps> = args => <Text {...args}>Hi Mom!</Text>

export const Default = Template.bind({})
Default.args = {
  component: 'h1',
  align: 'left',
}
