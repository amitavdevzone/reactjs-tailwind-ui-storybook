import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, Props } from '../src/components/Badge/index';

const meta: Meta = {
  title: 'Atoms/Badge',
  component: Badge,
};

export default meta;

const Template: Story<Props> = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a badge',
  variant: 'info',
  withBg: false,
  lightText: false,
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  text: 'This is a badge',
  variant: 'info',
  withBg: true,
  lightText: false,
};
