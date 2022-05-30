import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Cart, Props } from '../src/components/Cart/index';

const meta: Meta = {
  title: 'Components/ECom/Cart',
  component: Cart,
  argTypes: {
    handleCheckout: { action: 'clicked' },
    handleViewCart: { action: 'clicked' },
  },
};

export default meta;

const Template: Story<Props> = args => <Cart {...args} />;

export const Default = Template.bind({});
Default.args = {
  cartItems: [
    {
      name: 'Product name',
      image: 'https://www.hyperui.dev/photos/tee-green-person-2.png',
      metaItems: [{ name: 'Size', value: 'XL' }],
    },
    {
      name: 'Second name',
      image: 'https://www.hyperui.dev/photos/tee-green-hanger.png',
      metaItems: [
        { name: 'Size', value: 'XL' },
        { name: 'Color', value: 'Red' },
      ],
    },
    {
      name: 'Apple iPhone',
      image: 'https://images.unsplash.com/photo-1627844541143-a561a1a9b72a',
      metaItems: [
        { name: 'Size', value: 'M' },
        { name: 'Color', value: 'Blue' },
        { name: 'Model', value: '11' },
      ],
    },
  ],
};
