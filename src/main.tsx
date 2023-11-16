import React from "react";
import { createRoot } from 'react-dom/client';
import App from "App";

import "./scss/main.scss";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app') as Element);
root.render(<App/>);
