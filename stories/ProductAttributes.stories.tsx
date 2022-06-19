import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ProductAttribute,
  Props,
} from '../src/components/ProductView/ProductAttribute/index';

const meta: Meta = {
  title: 'Atoms/ProductAttribute',
  component: ProductAttribute,
};

export default meta;

const Template: Story<Props> = args => <ProductAttribute {...args} />;

export const Default = Template.bind({});
Default.args = {
  attribute: {
    key: 'Size',
    values: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
  },
};
