import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, Props } from '../src/components/Alert/index';

const meta: Meta = {
  title: 'Atoms/Alert',
  component: Alert,
};

export default meta;

const Template: Story<Props> = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Hi, how are you?',
  variant: 'info',
};
