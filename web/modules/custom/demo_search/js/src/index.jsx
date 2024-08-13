import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

// Get the container for your app
const container = document.getElementById('demo-search');

// Check if the container exists to avoid null errors
if (container) {
  // Create a root
  const root = ReactDOM.createRoot(container);

  // Render the Main component
  root.render(<App />);
} else {
  console.error('Failed to find the root element');
}