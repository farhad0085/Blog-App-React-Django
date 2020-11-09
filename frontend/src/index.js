import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(<App />, document.getElementById('root'));
}

else {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
