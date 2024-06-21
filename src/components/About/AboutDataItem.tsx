// DataItem.tsx
import React from 'react';
import { DataItemProps } from './types';

const DataItem: React.FC<DataItemProps> = ({ id, pText1, pText2 }) => (
    <div className="border py-8 rounded-xl shadow-xl" key = {id}>
    <p className="text-6xl font-bold text-sky-600">{pText1}</p>
    <p className="text-gray-900 mt-2">{pText2}</p>
  </div>
);

export default DataItem;