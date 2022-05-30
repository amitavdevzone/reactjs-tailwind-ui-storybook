import React, { FC } from 'react';
import { ICartItem } from '../cart-item.interface';

export interface Props {
  cartItem: ICartItem;
}

export const CartItem: FC<Props> = ({ cartItem }) => {
  const { image, name, metaItems } = cartItem;
  return (
    <div className="flex items-start pt-8">
      <img
        className="object-cover w-16 h-16 rounded-lg"
        src={image}
        alt="Basic Tee"
      />

      <div className="ml-4">
        <h3 className="text-sm">{name}</h3>

        <dl className="mt-1 space-y-1 text-xs text-gray-500">
          {metaItems.length > 0 &&
            metaItems.map((metaItem, key) => {
              return (
                <div key={key}>
                  <dt className="inline">{metaItem.name}:</dt>
                  <dd className="inline">{metaItem.value}</dd>
                </div>
              );
            })}
        </dl>
      </div>
    </div>
  );
};
