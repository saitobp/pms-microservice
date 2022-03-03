import React, { CSSProperties } from 'react'
import { Story, Meta } from '@storybook/react'

import { uiTheme } from '../../utils/ui.theme'

import Container from './Container'
import { IContainerProps } from './utils/container.types'

export default {
  title: 'Layout/Container',
  component: Container,
} as Meta

const squareStyle: CSSProperties = {
  width: '50px',
  height: '50px',
  backgroundColor: uiTheme.pallete.gray,
  margin: '5px',
}

const Template: Story<IContainerProps> = args => (
  <Container {...args}>
    <div style={squareStyle} />
    <div style={squareStyle} />
    <div style={squareStyle} />
    <div style={squareStyle} />
    <div style={squareStyle} />
    <div style={squareStyle} />
  </Container>
)

export const ContainerRow = Template.bind({})
ContainerRow.args = {
  layout: 'row',
}

export const ContainerColumn = Template.bind({})
ContainerColumn.args = {
  layout: 'column',
}
