import React, { FC } from 'react';

import { ICartItem } from './cart-item.interface';
import { CartItem } from './CartItem';

export interface Props {
  cartItems: Array<ICartItem>;
  handleCheckout: ({ ...args }) => void;
  handleViewCart: ({ ...arg }) => void;
}

export const Cart: FC<Props> = ({
  cartItems,
  handleCheckout,
  handleViewCart,
}) => {
  const handleCheckoutButton = (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    handleCheckout({ name: 11 });
  };
  const handleViewCartLink = (
    event: React.SyntheticEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    handleViewCart({ route: '/products' });
  };
  return (
    <div
      className="block w-screen max-w-sm p-10 border sm:px-12 bg-stone-100 border-stone-600"
      aria-modal="true"
      aria-label="Item added to your cart"
      role="dialog"
      tabIndex={-1}
    >
      <div className="flex items-start justify-between">
        <h2 className="flex items-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <span className="ml-2 text-sm"> Item added to your cart </span>
        </h2>

        <button
          className="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
          type="button"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="pb-12">
        {cartItems.length > 0 &&
          cartItems.map((cartItem, key) => {
            return <CartItem key={key} cartItem={cartItem} />;
          })}
      </div>

      <div className="space-y-4 text-center">
        <a
          className="block p-3 text-sm border rounded-lg border-stone-600 text-stone-500 hover:ring-1 hover:ring-stone-400 hover:text-stone-600"
          onClick={handleViewCartLink}
        >
          View my cart (2)
        </a>

        <form onSubmit={handleCheckoutButton}>
          <button
            className="block w-full p-3 text-sm rounded-lg bg-stone-600 text-stone-100 hover:bg-stone-500"
            type="submit"
          >
            Check out
          </button>
        </form>

        <a
          className="inline-block text-sm tracking-wide underline underline-offset-4 text-stone-500 hover:text-stone-600"
          onClick={handleViewCartLink}
        >
          Continue shopping
        </a>
      </div>
    </div>
  );
};
