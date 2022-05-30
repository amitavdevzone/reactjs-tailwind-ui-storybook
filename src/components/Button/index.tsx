import React, { FC } from 'react';

export interface Props {
  message: string;
  variant?: 'success' | 'warning' | 'danger' | 'info';
}

export const Alert: FC<Props> = () => {
  return (
    <div className={`p-4 border rounded`} role="alert">
      <strong className="text-sm font-medium">asasdsda</strong>
    </div>
  );
};
