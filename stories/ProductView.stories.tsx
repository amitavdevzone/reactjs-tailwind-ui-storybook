import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProductView, Props } from './../src/components/ProductView';

const meta: Meta = {
  title: 'Components/ECom/ProductView',
  component: ProductView,
};

export default meta;

const Template: Story<Props> = args => <ProductView {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    title: 'Apple iPhone 13 with new camera',
    price: '$1500.99',
    featuredImageUrl:
      'https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=608&h=608&q=50',
    description:
      'The most advanced dual‑camera system ever. Durability that’s front and centre. And edge to edge. A lightning-fast chip that speeds up everything you do. New Ultra Wide camera reveals more detail in the dark areas of your photos',
    subTitle: 'New iPhone 13 with latest Bionic chip',
    stars: 2,
    productThumbUrls: [
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=296&h=296&q=30',
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=296&h=296&q=30',
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=296&h=296&q=30',
    ],
    attributes: [
      { key: 'Color', values: ['Texas Tea', 'Fiesta Red', 'Cobalt Blue'] },
      { key: 'Size', values: ['XS', 'S', 'M', 'L'] },
      { key: 'Camera', values: ['3MP', '6MP', '9MP', '12MP'] },
    ],
  },
};
