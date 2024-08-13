import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

// Define Main as a functional component
const Main = () => (
  <>
    {
      <App></App>
    }
    {
      <div>Search To Be Continued</div>
    }
  </>
);

// Get the container for your app
const container = document.getElementById('demo-search');

// Check if the container exists to avoid null errors
if (container) {
  // Create a root
  const root = ReactDOM.createRoot(container);

  // Render the Main component
  root.render(<Main />);
} else {
  console.error('Failed to find the root element');
}