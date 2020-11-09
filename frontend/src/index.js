import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
}

else {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

reportWebVitals();
