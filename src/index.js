import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';


import App from './App';
console.log('React is loading...');
console.log('Root element:', document.getElementById('root'));

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!');
  document.body.innerHTML = '<h1 style="color: red; text-align: center; padding: 50px;">Error: Root element not found!</h1>';
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
  console.log('React app rendered successfully!');
}
