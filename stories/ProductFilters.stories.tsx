import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProductFilters, Props } from '../src/components/ProductFilters/index';

const meta: Meta = {
  title: 'Components/ECom/ProductFilters',
  component: ProductFilters,
};

export default meta;

const Template: Story<Props> = args => <ProductFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  facetData: [
    {
      facetName: 'Type',
      facetValues: [
        { id: 1, name: 'Toy' },
        { id: 2, name: 'Game' },
        { id: 3, name: 'Outdoor' },
      ],
    },
    {
      facetName: 'Age',
      facetValues: [
        { id: 4, name: '3+' },
        { id: 5, name: '8+' },
        { id: 6, name: '12+' },
        { id: 7, name: '16+' },
      ],
    },
    {
      facetName: 'Size',
      facetValues: [
        { id: 8, name: 'S' },
        { id: 9, name: 'M' },
      ],
    },
  ],
  onApplyFilter: data => console.log('data', data),
};
