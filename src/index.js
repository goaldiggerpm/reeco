import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

import store from './store';
import reportWebVitals from './reportWebVitals';

const App = lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);

reportWebVitals();
