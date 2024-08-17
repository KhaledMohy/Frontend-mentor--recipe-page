import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style/index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<div className="page">
			<App />
		</div>
	</StrictMode>
);
