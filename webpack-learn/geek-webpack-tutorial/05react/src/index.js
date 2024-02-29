import React from 'react';
import { createRoot } from 'react-dom/client';
import Search from './search'
import img from './imags/Snipaste_2024-02-23_20-11-17.png'

console.log(img);

const root = createRoot(document.getElementById('app'));

root.render(<Search></Search>)