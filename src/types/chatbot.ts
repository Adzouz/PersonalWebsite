import React from 'react';

export interface IQuestion {
  question: string;
  answer: string;
  itemType?: 'flag' | 'logo' | 'list' | 'percentage';
  items?: {
    element: React.ReactNode;
    percentage?: number;
  }[];
};
